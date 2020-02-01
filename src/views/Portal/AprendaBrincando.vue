<template>
    <div class="default-page">
        <div class="default-page__panel --left-ranking">
            <div class="default-page__panel__wrapper">
                <h2>minha posição</h2>
                <div class="posicao-container" @keydown.enter="VerPosicao()">
                    <vs-input v-model="usuarioAprendaBrincando" placeholder="E-mail" name="posicao"/>
                    <div @click="posicaoModalOpened = true">
                        <vs-icon class="posicao-container__icon" icon="enter" color="#505050"/>
                    </div>
                </div>
                <div class="divisoria">
                    <img src="@/assets/divisoria.svg" style="margin: 0 auto"/>
                </div>
                <h2>melhores jogadores</h2>
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
                    <div></div>
                </div>
            </div>
        </div>

        <div class="default-page__panel --right-panel">
            <div class="mask --mask-1"/>
            <div class="mask --mask-2"/>
            <div class="mask --mask-3"/>
            <div class="title">
                <h1>Aprenda</h1>
                <h1>Brincando</h1>
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
class AprendaBrincando extends Vue {

    private usuarioAprendaBrincando: string = '';
    private posicaoModalOpened: boolean = false;

    private VerPosicao(): void {
        this.posicaoModalOpened = true;
    }
}

export default AprendaBrincando;
</script>

<style>
html,body {
    font-size: 16px;
}
.--right-panel{
    background-image: url("~@/assets/right-bg.jpg");
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    border-bottom-left-radius: 50px;
}
.--right-panel .mask {
    position: absolute;
    right: 0;
    top:0;
    background-color: rgba(255,230,130,.5);
    border-bottom-left-radius: 50px;
}
.--left-panel .mask {
    position: absolute;
    left: 0;
    top:0;
    background-color: rgba(255,230,130,.5);
    border-bottom-right-radius: 50px;
}
.--mask-1{
    width: 100%;
    height: 100%;
}
.--mask-2{
    width: 75%;
    height: 90%;
}
.--mask-3{
    width: 60%;
    height: 75%;
}

.title {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    text-align: right
}

.--left-title {
    left: 50px;
    right: auto;
    text-align: left;
}
.title h1 {
    color: white;
    font-size: 3rem;
    padding-bottom: 10px;
}

/* Ranking */
.positions {
    display: grid;
    grid-template-columns: auto 1fr auto 30px;
    grid-gap: 10px;
    font-weight: 500;
    align-items: center;
    height: 55px;
    border-bottom: solid #F1F1F1 1px;
}

.divisoria {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
}

.logo {
    width: 300px;
    left: calc(50% - 150px);

    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}

.posicao-container{
    position: relative;
}
.posicao-container__icon {
    position: absolute;
    top: 10px;
    right: 10px;
}

.posicao-modal {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>