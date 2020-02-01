<template>
    <div flex center ref="animation" :style="[{'width': size},{'height': size}]">

    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';
import lottie, { AnimationItem, AnimationConfigWithData } from 'lottie-web';

@Component({ })
class VsLottie extends Vue {

    // =========== Ciclo de vida ============
    private mounted(): void {
        const animationConfig: AnimationConfigWithData= {
            container: this.$refs.animation as Element,
            renderer: 'svg',
            loop: this.loop,
            autoplay: this.autoPlay,
            animationData: require('@/assets/lottie/' + this.animationData)
        };
        this.animation = lottie.loadAnimation(animationConfig);
        this.animation.setSpeed(this.speed);
    }

    private destroyed(): void {
        const vm = this;
        setTimeout(() => {
            vm.animation!.destroy();
        }, 600);
    }

    // =========== Propriedades ============

    @Prop({ type: String, required: true })
    private readonly animationData!: string;

    @Prop({ type: Boolean, default: true })
    private readonly autoPlay!: boolean;

    @Prop({ type: Boolean, default: false })
    private readonly loop!: boolean;

    @Prop({ type: String, default: '120px' })
    private readonly size!: string;

    @Prop({ type: Number, default: 1})
    private readonly speed!: number;

    // =========== Variáveis reativas ============

    private animation?: AnimationItem;

    // =========== Métodos ============
    private Play(): void {
        this.animation!.play();
    }

    private Stop(): void {
        this.animation!.stop();
    }

}

export default VsLottie;
</script>

<style>

</style>