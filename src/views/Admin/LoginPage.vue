<template>
    <div class="admin-login">
        <div class="login-view">
            <div class="login-view__background"></div>
            <div class="login-view__form-container">
                <div class="login-view__form">
                    <img class="login-view__logo" src="@/assets/logo.png"/>
                    <br/>
                    <br/>
                    <validation-observer tag="form" ref="form" @submit.prevent="login()">
                        <h2>Login</h2>
                        <br/>
                        <div class="form__inputs">
                            <vs-input v-model="email" name="email" placeholder="E-mail" rules="required"/>
                            <vs-input v-model="senha" name="senha" placeholder="Senha" type="password" rules="required"/>
                        </div>
                        <br/>
                        <button primary>
                            Confirmar
                        </button>

                    </validation-observer>
                </div>
            </div>
        </div>

        <!-- Modais -->
        <div class="loading-modal" v-if="isBusy">
            <vs-lottie animation-data="loading" size="150px" :loop="true"/>
        </div>
        <n-modal :isOpened.sync="error">
            <div class="error-modal">
                <vs-lottie animation-data="alert" size="150px"/>
                <br/>
                <br/>
                <h2>Usuário ou senha inválidos  </h2>
                <br/>
                <button primary @click="error = false">
                    Ok
                </button>
            </div>
        </n-modal>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import {ValidationObserver} from 'vee-validate';
import VsInput from '@/components/vs-Input.vue';
import NModal from '@/components/n-Modal.vue';

import VsLottie from '@/components/vs-Lottie.vue';
declare interface Observer extends Vue {
    validate: () => Promise<boolean>
}
@Component({components: { VsInput, ValidationObserver, VsLottie, NModal } })
class AdminLoginPage extends Vue {
    
    private isBusy: boolean = false;
    private error: boolean = false;

    private login(): void {
        (this.$refs.form as Observer).validate()
            .then(isValid => {
                if(isValid) {
                    if(this.email == 'raphael@vsoft.com.br' && this.senha == '1234') {
                        this.isBusy = true;
                        const vm = this;
                        setTimeout(() => {
                            this.$router.push('dashboard');
                        }, 2000);
                    }
                    else {
                        this.error = true;
                    }
                   
                }
            });
    }
    private email: string = '';
    private senha: string = '';
}

export default AdminLoginPage;
</script>

<style>
.login-view{
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
}

.login-view__background{
    flex: 1;
    background-image: url("~@/assets/bg.jpg");
    background-size: cover;
    background-position: center;
}
.login-view__form-container{
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    text-align: center;
}

@media (max-width: 600px) {
    .login-view__form-container{
        position: absolute;
        top: calc(50% - 250px);
        left: 10%;
        width: 80%;
        height: 500px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,.5);
        padding: 20px;
    }
    .login-view__form{
        width: 100%;
    }

}
.login-view__form{
    width: 70%;
    padding-bottom: 50px;
}

.login-view__logo {
    height: 120px;
    object-fit: contain;
}

.login-view__inputs{
    margin-bottom: 10px;
}

.loading-modal {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;
}
.error-modal {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>