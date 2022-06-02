

/*let i = 0;
let a = 0;
let text = document.getElementById("dialogue-txt").innerHTML;
console.log(text);

const speed = 25;
const delay = 2000;

function typewriter() {
    if (i < text.length) {
        document.getElementById("#dialogue-text") += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}*/




/*Vue.config.devtools = true;

Vue.component("dialogue", {
    template: "#dialogue"
});

Vue.component("dialogue-text", {
    template: "#dialogue-text",
    data() {
        return {
            text: "",
            displayedText: ""
        };
    },
    created() {
        this.text = this.$slots.default[0].text;
    },
    mounted() {
        const speed = 25;
        const delay = 2000;
        let i = 0;

        const typewriter = () => {
            if (i < this.text.length) {
                this.displayedText += this.text.charAt(i);
                i++;
                setTimeout(typewriter, speed);
            }
        };

        setTimeout(typewriter, delay);
    }
});

const app = new Vue({
    el: "#app",
    mounted() {
        setTimeout(() => {
            //this.$refs.audio.play();
        }, 2000);
    }
});*/
