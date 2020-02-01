<template>
    <div class="symbol"
         :style="[{'width': size},
                  {'height': size},
                  {'background-color': color},
                  {'mask-image': 'url('+ require('@/assets/icons/'+icon+'.svg') +')'}]"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ })
export default class VsIcon extends Vue {

    @Prop({ type: String, required: true })
    private readonly icon!: string;

    @Prop({ type: String, default: '20px'})
    private readonly size!: string;

    @Prop({ type: String, default: 'red'})
    private readonly color!: string;
}
</script>


<style>
.symbol {
    display: inline-block;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    transition: background-color .3s;
}
</style>
