<template>
    <validation-provider :name="name"
                         :rules="rules"
                         v-slot="{ errors }"
                         tag="div"
                         class="id-input__container">
        <div class="id-input" @click="selected"
             :class="[{'--outline': outline}, {'--outline-error': errors.length && firstValidate }]">
            <label :for="name" class="id-input__placeholder"
                   :style="{'background-color': backgroundColor }"
                   :class="{'--active': isActive || value.length > 0}">
                {{ placeholder }}
            </label>
            <input @focus="isActive = true"
                   @blur="lostFocus()"
                   @keyup="text = $event.target.value; $emit('input', text)"
                   @click="text = $event.target.value; $emit('input', text)"
                   :name="name"
                   :style="{'color': textColor}"
                   :readonly="readonly || type == 'select'"
                   v-model="text"
                   v-mask="mask"
                   :max="max"
                   :min="min"
                   autocomplete='off'
                   class="id-input__input"
                   :type="type != 'password' ? type : showPassword ? 'text': 'password'"
                   :maxlength="maxlength"/>
           
            <!-- Icone Mostrar senha -->
            <div class="id-input__password" @click="showPassword = !showPassword" v-if="type == 'password'">
                <div class="id-input__password-container">
                    <transition name="crossFade">
                        <div v-if="showPassword" :key="1">
                            <vs-icon  icon="eye" color="#505050"/>
                        </div>
                        <div v-else :key="2">
                            <vs-icon icon="cross-eye" color="#505050"/>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
       
        <!-- Focus Bar -->
        <div class="id-input__border" v-if="!outline">
            <div class="id-input__border-focus" :class="[{'--focused ': isActive || value.length}, {'--on-error-bar ': errors.length && !isActive}]"/>
        </div>
      
        <!-- Errors -->
        <span class="vs-input__span" :class="{'--on-error': errors.length}">
            {{ errors[0] }}
        </span>
    </validation-provider>
</template>


<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';
import AwesomeMask from 'awesome-mask';
import VsIcon from './vs-Icon.vue';


@Component({ components: { ValidationProvider, VsIcon }, directives: { mask: AwesomeMask } })
class VsInput extends Vue {
    private mounted(): void {
        const vm = this;
        this.$parent.$on('validate', () => {
            this.firstValidate = true;
        });
    }

    @Prop({ type: String, default: 'white'})
    private readonly backgroundColor!: string;

    @Prop({ type: String, default: '#505050'})
    private readonly textColor!: string;

    @Prop({ type: String, required: true })
    private readonly placeholder!: string;

    @Prop({ type: String, required: true })
    private readonly value!: string;

    @Prop({ type: String, default: 'text' })
    private readonly type!: string;

    @Prop({ type: String, required: true })
    private readonly name!: string;

    @Prop({ type: Boolean, default: false })
    private readonly readonly!: boolean;

    @Prop({ type: String })
    private readonly rules!: string;

    @Prop({ type: String, default: '' })
    private readonly mask!: string;
   
    @Prop({ type: Number })
    private readonly max!: number;
   
    @Prop({ type: Number })
    private readonly min!: number;

    @Prop({ type: Number, default: 30 })
    private readonly maxlength!: number;
    
    @Prop({ type: Boolean, default: true })
    private readonly outline!: boolean;

    // /* =============== Variáveis reativas ============== */

    private isActive: boolean = false;
    private text: string = this.value;
    private showPassword: boolean = false;
    private firstValidate: boolean = false;

    // /* ================= Métodos ================ */
    private selected(e: MouseEvent) {
        if(this.type === 'select') {
            e.preventDefault();
            this.$emit('select');
        }
    }

    @Watch('value')
    private onValueChanged(newValue: string): void {
        if(this.type == 'number' && Number(this.text) > this.max) {
            this.$emit('input', this.max.toString());
        }
        if(newValue !== this.text) {
            this.text = newValue;
        }
    }

    private lostFocus(): void {
        if(this.type == 'number' && Number(this.value) > this.max) {
            this.$emit('input', this.max.toString());
        }
        // if(this.mask.length) {
        //     if(this.value.length !== this.mask.length) {
        //         this.$emit('input', '');
        //     }
        // }
        this.isActive = false;
    }
}

export default VsInput;
</script>

<style>
.id-input__container{
    width: 100%;
}
.id-input{
    height: 40px;
    width: 100%;
    padding-bottom: 5px;
    margin-top: 16px;
    
    position: relative;
    display: flex;
    align-items: flex-end;
}

.--outline {
    padding: 0 10px;
    align-items: center;
    border: solid #505050 1px;
    border-radius: 6px;
    transition: border .3s;
}

.--outline-error {
    border: solid var(--error) 1px;
}


.id-input__border {
    width: 100%;
    height: 1px;
    margin-bottom: 1px;

    background-color: #BEBEBE;
    
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
}

.id-input__border-focus {
    width: 0;
    height: 2px;
    background-color: var(--primary-color-gradient);
    transition: width .3s, background-color .3s;
}
.--on-error-bar {
    background-color: var(--error);
}

.--focused {
    width: 100%;
}

.id-input__input{
    width: 100%;
    border: none;
    outline: none;
    font-size: 0.875rem;
    background-color: transparent;
}

.id-input__placeholder{
    cursor: text;
    padding: 0px 5px;
    line-height: 0.875rem;
    color: #505050;
    position: absolute;
    transform-origin: left;
    top: calc(50% - 7px);
    font-size: 1rem;
    transition: .3s;
    -webkit-text-size-adjust: 100%;
    left: 5px;;
    pointer-events: none;
}

.--active{
    top: -7px;
    transform: scale(.75);
    cursor: default;
    color: #505050;
}
.--error-label {
    color: var(--error);
}

.vs-input__span{
    display: block;
    font-size: 0.6875rem;
    height: 0px;
    transition: .3s;
    overflow: hidden;
    font-weight: var(--light)
}
.--on-error{
    color: var(--error);
    height: 18px;
    display: flex;
    align-items: flex-end
}

.id-input__password {
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 10px;
    padding-top: 5px;
}
.id-input__password-container {
    position: relative;
    display: flex;
    height: 20px;
    width: 20px;
    align-items: center;
    
}
</style>