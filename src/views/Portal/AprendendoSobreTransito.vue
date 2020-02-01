<template>
    <div class="default-page">
        <div class="default-page__panel --left-panel">
            <div class="mask --mask-1"/>
            <div class="mask --mask-2"/>
            <div class="mask --mask-3"/>
            <div class="title --left-title">
                <h1>Aprendendo</h1>
                <h1>Sobre</h1>
                <h1>Trânsito</h1>
            </div>
        </div>
        <div class="default-page__panel ">
            <div class="default-page__panel__wrapper --right-ranking">
                <h2>minha posição</h2>
                <div class="posicao-container" @keydown.enter="VerPosicao()">
                    <vs-input v-model="usuarioAprendendo" placeholder="E-mail" name="posicao"/>
                    <div @click="posicaoModalOpened = true">
                        <vs-icon class="posicao-container__icon" icon="enter" color="#505050"/>
                    </div>
                </div>
                <div class="divisoria">
                    <img src="@/assets/divisoria.svg" style="margin: 0 auto"/>
                </div>
                <div class="positions" v-for="n in 3" :key="n">
                    <span>{{ n }}º</span>
                    <!-- <div class="first-positions__image"/> -->
                    <span>João Figueira</span>
                    <span>1247pts</span>
                    <img :src="require('@/assets/trofeu-'+ n +'.svg')"/>
                </div>
                <div class="positions" v-for="n in 2" :key="n + 3">
                    <span>{{ n + 3 }}º</span>
                    <!-- <div class="first-positions__image"/> -->
                    <span>João Figueira</span>
                    <span>1247pts</span>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <n-modal :isOpened.sync="posicaoModalOpened">
            <div class="posicao-modal">
                <vs-lottie animation-data="trophy" :loop="true" size="200px"/>
                <br/>
                <h1>Parabéns João Figueira</h1>
                <br/>
                <h2>Sua posição atual é:</h2>
                <br/>
                <h2>102920º</h2>
                <br/>
                <button primary @click="posicaoModalOpened = false">Ok</button>
            </div>
           
        </n-modal>
        
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import VsInput from '@/components/vs-Input.vue';
import VsIcon from '@/components/vs-Icon.vue';
import VsLottie from '@/components/vs-Lottie.vue';
import NModal from '@/components/n-Modal.vue';

@Component({ components: { VsInput, VsIcon, NModal, VsLottie }  })
class AprendendoSobreTransito extends Vue {
    private usuarioAprendendo: string = '';
    private posicaoModalOpened: boolean = false;

    private VerPosicao(): void {
        this.posicaoModalOpened = true;
    }
}

export default AprendendoSobreTransito;
</script>

<style>
.--left-panel {
    background-image: url("~@/assets/left-bg.jpg");
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    border-bottom-right-radius: 50px;
}
</style>