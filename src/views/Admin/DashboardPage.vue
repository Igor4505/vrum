<template>
    <div class="dashboard-page">
        <nav class="menu">
            <img class="menu__logo" src="@/assets/logo.png"/>
            <div class="menu__item">
                Dashboard
            </div>
        </nav>
        <section class="conteudo">
            <header class="conteudo__header">
                <span>
                    Bem-vindo, Raphael
                </span>
                <button class="conteudo__header__sair" @click="$router.push({ name: 'login'})">
                    Sair
                </button>
            </header>
            <h2 class="conteudo__title">Dashboard</h2>
            <div class="conteudo__graficos">
                <div class="conteudo__graficos__grafico">
                    <line-chart :style="[{'height': '100%'}, {'width': '100%'}]" :chart-data="dataCollection" :options="{ maintainAspectRatio:false}"></line-chart>
                </div>
                <div class="conteudo__graficos__grafico">
                    <pie-chart :style="[{'height': '100%'}, {'width': '100%'}]" :chart-data="pieCollection" :options="{ maintainAspectRatio:false}"></pie-chart>
                </div>
                <div class="conteudo__graficos__grafico">
                    <pie-chart :style="[{'height': '100%'}, {'width': '100%'}]" :chart-data="pieCollection" :options="{ maintainAspectRatio:false}"></pie-chart>
                </div>
                <div class="conteudo__graficos__grafico">
                    <line-chart :style="[{'height': '100%'}, {'width': '100%'}]" :chart-data="dataCollection" :options="{ maintainAspectRatio:false}"></line-chart>
                </div>
               
            </div>
        </section>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

// exemplos: https://www.chartjs.org/samples/latest/
import LineChart from '@/charts/LineChart';
import PieChart from '@/charts/PieChart';

@Component({ components: { LineChart, PieChart } })
class DashboardPage extends Vue {

    private dataCollection = {
        labels: [25, 30],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [12, 42]
            }, {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [30, 25]
            }
        ]
    };

    private pieCollection = {
        datasets: [{
            data: [
                1,
                2,
                3,
                4,
                5,
            ],
            backgroundColor: [
                "#BD4343",
                "#3358B8",
                "#DCCC3F",
                "#EB3DBA",
                "#34D96C",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    };
}

export default DashboardPage;
</script>

<style>
.dashboard-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: stretch;
    background-color: #F6F6F6;
}
/* Menu */
.menu {
    width:250px;
    background-color: white;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu__logo {
    height: 100px;
    box-sizing: border-box;
    margin: 20px 0 50px;
}

.menu__item {
    align-self: stretch;
    height: 40px;
    background-color: rgba(176,193,68, .2);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    padding: 20px;
        color: #8F985A;
    font-weight: 700;

}

.conteudo {
    flex: 1;
}

.conteudo__header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: solid #D4D4D4 1px;
    margin-left: 50px;
    padding: 0 20px;
}

.conteudo__header__sair {
    height: 30px;
    border-radius: 15px;
    padding: 0 20px;
    border: solid #838383 1px;
    background-color: transparent;
    color: #838383;
    margin-left: 30px;

}
.conteudo__title {
    padding: 20px 20px 10px;
}
.conteudo__graficos {
    width: 100%;
    flex-wrap: wrap;
    padding: 10px;
    display: flex;
}
.conteudo__graficos__grafico {
    margin: 10px;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    flex-grow: 1;
    height: 300px;
    max-width: 60%;
}
</style>