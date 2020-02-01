<template>
    <div class="portal">
        <transition :name="animationName">
            <router-view/>
        </transition>

        <nav id="menu">
            <div class="menu_wrapper">
                <a @click="$router.push({name: 'aprendabricando'})"
                   class="menu-item"
                   :class="{'--selected': $route.name == 'aprendabricando' }">
                    VRUM Aprenda Brincando
                </a>
                <a @click="$router.push({name: 'aprendendosobretransito'})"
                   class="menu-item"
                   :class="{'--selected': $route.name == 'aprendendosobretransito' }">
                    VRUM Aprendendo Sobre Trânsito
                </a>
            </div>
        </nav>

        <img class="logo" src="@/assets/logo.png"/>
        
        <div class="registrar">
            <button  @click="$router.push({ name: 'cadastro'})">
                Registre-se agora
            </button>
            <a @click="$router.push({name: 'login'})">admin</a>
        </div>

      
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({ })
class PortalMainPage extends Vue {
     
    private animationName: string = '';

    @Watch('$route')
    private onRouteChange(): void {
        this.animationName = this.$route.name == 'aprendendosobretransito' ? 'toLeft' : 'toRight';
    }
    private registerOpened: boolean = false;

}

export default PortalMainPage;
</script>

<style>
.portal {
      overflow: hidden;
    width:100%;
    height: 100vh;
    position: relative;
    background-color: white;
}
#menu {
    position: absolute;
    left: 0;
    top: 15px;
    display: flex;
    width: 100%;
}

.menu_wrapper {
    width: 100%;
    position: relative;
}
.menu_wrapper a:nth-child(1) {
    position: absolute;
    right: 50%;
}
.menu_wrapper a:nth-child(2) {
    position: absolute;
    left: 50%;
}
.menu-item{
    margin: 0 30px;
    padding: 5px 0;
    display: block;
    font-weight: bold;
    cursor: pointer;
    color: white;
    transition: .6s .6s;
}
.--selected {
    color: #505050;
}

.default-page {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
}

.default-page__panel {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: stretch;
}
.--left-ranking {
    padding: 0 200px 0 60px;
}
.--right-ranking {
    padding: 0 60px 0 200px;
}

.default-page__panel__wrapper {
    width: 100%;
}

h2 {
    font-weight: 300;
    
}

.toLeft-enter, .toRight-leave-to  {
    transform: translateX(100%);
}
.toLeft-enter-active, .toLeft-leave-active, .toRight-enter-active, .toRight-leave-active {
    transition: 1s;
    position: absolute;
    overflow: hidden;
}
.toLeft-enter-to, .toLeft-leave, .toRight-enter-to, .toRight-leave{
    transform: translateX(0)
}

.toLeft-leave-to, .toRight-enter  {
    transform: translateX(-100%)
}


.pageFade-enter, .pageFade-leave-to {
    opacity: 0
}

.registrar {
    width: 260px;
    
   
    position: absolute;
    left: calc(50% - 130px);
    bottom: 70px;
    text-align: center;
    
}
.registrar button {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    border: none;
    box-shadow: 4px 4px 4px rgba(0,0,0,.25);
    background-color: #4E4E4E;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
}
.registrar a {
    display: block;
    color: #505050;
    margin: 20px 0;
    font-size: 0.8rem;
    cursor: pointer;
}

.registrar button:hover {
    background-color: rgb(114, 114, 114);
}

.modal {
    text-align: center;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.--margin {
    margin: 30px 0;
}
.form {
    width: 100%;
    height: 100%;
     padding: 20px;
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.form__inputs {
    width: 100%;
}
.modal button {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    border: none;
    box-shadow: 4px 4px 4px rgba(0,0,0,.25);
    background-color: #4E4E4E;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
}


.fadeModal-enter, .fadeModal-leave-to {
    opacity: 0;
}
.fadeModal-enter-active, .fadeModal-leave-active{
    transition: .2s;
}


</style>