const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 800,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['trasnferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        incrementar() {
            this.cantidad += 100
        },
        disminuir(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true
                alert('Saldo 0')
                return
            }
            this.cantidad -= valor
        },
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger';
        }
    }
})