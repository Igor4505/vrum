<template>
    <div id="app">
        <transition name="drillIn">
            <router-view/>
        </transition>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import NModal from '@/components/n-Modal.vue';
import VsInput from '@/components/vs-Input.vue';
import VsLottie from '@/components/vs-Lottie.vue';

import {ValidationObserver} from 'vee-validate';
import { ValidationResult, ValidationRuleSchema } from 'vee-validate/dist/types/types';


@Component({ })
class App extends Vue {

}

export default App;
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
}
#app {
    width:100%;
    min-height: 100vh;
    position: relative;
    color: #505050;
    overflow-x: hidden
}

.drillIn-enter {
    transform: scale(.98);
    opacity: 0
}

.drillIn-enter-active, .drillIn-leave-active {
    transition: .5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100%;
}

.drillIn-leave-to {
    transform: scale(1);
    opacity: 1;
}

[primary] {
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
</style>