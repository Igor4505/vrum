<template>
    <transition name="crossFade">
        <div class="n-bib-modal" v-if="isOpened" @click.self="$emit('update:isOpened', false)">
            <transition name="modalAppear" appear>
                <!-- Conteúdo Modal -->
                <div class="n-modal__container" flex stretch v-show="isOpened">
                    <slot/>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
class NModal extends Vue {

   @Prop({ type: Boolean, default: false})
    private isOpened!: boolean;

}

export default NModal;
</script>

<style>
.n-bib-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.7);
    top: 0;
    left: 0;
    z-index: 11;
}
.n-modal__container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    position: relative;
}

.n-bib-modal__right-panel__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
    z-index: 12
}

.crossFade-enter, .crossFade-leave-to {
    opacity: 0
}

.crossFade-enter-active, .crossFade-leave-active {
    transition: .2s;
    position: absolute;
}

/* =========== Animações =========== */

@keyframes modalShow {
    0% {
        transform: scale(.96)
    }
    80% {
        transform: scale(1.04)
    }
    100% {
        transform: scale(1)
    }
}

.modalAppear-enter, .modalAppear-leave-to{
    opacity: 0;
}

.modalAppear-enter-active{
    animation: modalShow .3s ease-out;
    transition: .3s;
}
</style>