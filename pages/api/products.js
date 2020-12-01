function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const bone_volcano = {
        id: 'product-1',
        title: 'Boné VOLCANO Unissex Toro Fiat - Kaki',
        picture: '/images/products/bone-volcano-unissex-fiat-toro-kaki.jpg',
        price: 69,
    }

    const bone_connected = {
        id: 'product-2',
        title: 'Boné Connected Unissex Mobi Fiat - Preto',
        picture: '/images/products/bone-connected-unissex-fiat-mobi-preto.jpg',
        price: 69,
    }

    const bone_front = {
        id: 'product-3',
        title: 'Boné FRONT Unissex Cronos Fiat - Vermelho',
        picture: '/images/products/bone-front-unissex-fiat-cronos-vermelho.jpg',
        price: 69,
    }

    const mochila_lavoro = {
        id: 'product-4',
        title: 'Mochila LAVORO Unissex Fashion Fiat - Preto',
        picture: '/images/products/mochila-lavoro-unissex-fashion-fiat-preto.jpg',
        price: 349,
    }

    const bolsa_ranch = {
        id: 'product-5',
        title: 'Bolsa RANCH Unissex Toro Fiat - Preto',
        picture: '/images/products/bolsa-ranch-unissex-fiat-toro-preto.jpg',
        price: 139,
    }

    const camiseta_elegance = {
        id: 'product-6',
        title: 'Camiseta ELEGANCE Maculina Argo Fiat - Preto',
        picture: '/images/products/camiseta-elegance-masculina-fiat-argo-preta.jpg',
        price: 89.9,
    }

    const camiseta_design = {
        id: 'product-7',
        title: 'Camiseta DESIGN Masculina Cronos Fiat Cinza',
        picture: '/images/products/camiseta-design-masculina-fiat-cronos-cinza.jpg',
        price: 69.9,
    }

    const blusa_emotion = {
        id: 'product-8',
        title: 'Blusa EMOTION Feminina Cronos Fiat - Preto',
        picture: '/images/products/blusa-emotion-feminina-fiat-cronos-preta.jpg',
        price: 84.9,
    }

    const caneca_grafich = {
        id: 'product-9',
        title: 'Caneca GRAFICH Toro Fiat - Preto/Branco',
        picture: '/images/products/caneca-grafich-fiat-toro-preto-e-branco.jpg',
        price: 99,
    }

    const miniatura_toro = {
        id: 'product-10',
        title: 'Miniatura Carro - Toro METALIC Infantil - Fiat',
        picture: '/images/products/miniatura-carro-fiat-toro-metalic-infantil.jpg',
        price: 299,
    }

    const pop_fiat = {
        id: 'product-11',
        title: 'Acessório Celular POP Fiat - Preto',
        picture: '/images/products/acessorio-celular-pop-fiat-preto.jpg',
        price: 49,
    }

    const carteira_style = {
        id: 'product-12',
        title: 'Carteira STYLE Unissex Toro - Fiat Marrom',
        picture: '/images/products/carteira-style-unissex-fiat-toro-marrom.jpg',
        price: 99,
    }

    const mini_caixa_som = {
        id: 'product-13',
        title: 'Mini Caixa de Som SOUND Unissex',
        picture: '/images/products/mini-caixa-de-som-sound-unissex.jpg',
        price: 99,
    }

    let categories = [
        {
            id: 'category-1',
            title: 'Bonés',
            products: [bone_volcano, bone_connected, bone_front]
        },
        {
            id: 'category-2',
            title: 'Mochilas',
            products: [mochila_lavoro, bolsa_ranch]
        },
        {
            id: 'category-3',
            title: 'Camisetas',
            products: [camiseta_elegance, camiseta_design, blusa_emotion]
        },
        {
            id: 'category-4',
            title: 'Canecas',
            products: [caneca_grafich]
        },
        {
            id: 'category-5',
            title: 'Miniaturas',
            products: [miniatura_toro]
        },
        {
            id: 'category-6',
            title: 'Acessórios',
            products: [pop_fiat, carteira_style, mini_caixa_som]
        }
    ]

    if(req.query.q) {
        let results = [];

        categories.forEach(category => {
            const search_term = string_to_slug(req.query.q).toLowerCase();
            const category_title = string_to_slug(category.title).toLowerCase();

            if(category_title.includes(search_term)) {
                results.push(category);
            } else {
                const { id, title } = category;
                const filtered_category = { id, title, products: [] };
                const products = [];

                category.products.forEach(product => {
                    const product_title = string_to_slug(product.title).toLowerCase();

                    if(product_title.includes(search_term)) {
                        products.push(product);
                    }
                });

                if(products.length > 0) {
                    filtered_category.products = products;

                    results.push(filtered_category);
                }
            }
        });

        categories = results;
    }

    res.end(JSON.stringify({ categories }));
}