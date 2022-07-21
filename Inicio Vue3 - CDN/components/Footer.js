app.component('footer-banco', {
    props: ['cantidad'],

    template: /*html*/ `
        <div class="bg-dark text-white py-3 mt-2">
            <h3>{{ texto}}, {{cantidad}}</h3>
        </div>    
    `,
    data() {
        return {
            texto: 'Footer de mi sitio Web dinamico '
        }
    }
})

