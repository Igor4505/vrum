<template>
    <div class="cadastro-page">
        
        <div class="modal">
            <transition name="fadeModal" mode="out-in">
                
                <validation-observer tag="form" class="form" v-if="!cadastroConcluido" ref="form" @submit.prevent="register()">
                    <img src="@/assets/logo.png" style="width: 200px"/>
                    <h2>Registre-se no Vrum</h2>
                    <div class="form__inputs --margin">
                        <vs-input v-model="nome" name="nome" placeholder="Nome" rules="required"/>
                        <vs-input v-model="email" name="e-mail" placeholder="E-mail" rules="required|email"/>
                        <vs-input v-model="senha" name="senha" placeholder="Senha" type="password" rules="required"/>
                    </div>
                    <button>
                        Confirmar
                    </button>

                </validation-observer>
                <div class="form" v-else :key="2">
                    <vs-lottie animation-data="success" :loop="true" size="160px"/>
                    <div class="--margin">
                        <h2>Concluído</h2>
                        <br/>
                        <p>Agora você já pode acessar o Vrum</p>
                    </div>
                    <button @click="concluirCadastro()">
                        Ok
                    </button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import NModal from '@/components/n-Modal.vue';
import VsInput from '@/components/vs-Input.vue';
import VsLottie from '@/components/vs-Lottie.vue';
import {ValidationObserver} from 'vee-validate';

declare interface Observer extends Vue {
    validate: () => Promise<boolean>
}

@Component({ components: { NModal, VsInput, VsLottie, ValidationObserver }  })

class CadastroPage extends Vue {
    private cadastroConcluido: boolean = false;

    private nome: string = '';
    private email: string = '';
    private senha: string = '';

    private register(): void {
        (this.$refs.form as Observer).validate()
            .then(isValid => {
                if(isValid) {
                    this.cadastroConcluido = true;
                }
            });
    }
    private concluirCadastro(): void {
        this.$router.push({ name: "aprendabricando"});
    }
}

export default CadastroPage;
</script>

<style>
.cadastro-page {
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>