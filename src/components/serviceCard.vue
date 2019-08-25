<template lang="html">
  <div>
    <div class="services-card">
      <span class="services-subtitle">Этапы создания <p>успешной компании</p></span>
      <div class="container services-card-header">
        <div class="services-card-header-left-btn" @click="changeSlide(-1)"><i class="arrow left"></i></div>
        <transition appear name="fading-title" mode="out-in"><span :key="index" class="services-card-header-title">{{card[index].title}}</span></transition>
        <div class="services-card-header-right-btn" @click="changeSlide(1)"><i class="arrow right"></i></div>
      </div>
      <div class="columns service-card-body">
        <div class="column is-half">
          <transition appear name="fading-description" mode="out-in"><span :key="index" class="service-card-body-description">{{card[index].description}}</span></transition>
          <transition-group
              appear
              name="fading-tips"
              mode="out-in"
            >
            <ul class="service-card-body-steps" v-for="tip in card[index].tips" :key="tip">

              <li class="service-card-body-step" :key="tip">{{tip}}</li>

            </ul>
          </transition-group>
        </div>
      </div>
    </div>
    <transition appear name="slide-fade" mode="out-in">
      <div :key="index" class="service-planet" :style="{backgroundImage: 'url('+require('../assets/planet'+(index+1)+'.png')+')'}"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index: 0,
      card: [
        {
          title: 'Analytics',
          description:`Мы полностью вникаем в бизнес клиента, детально анализируем информацию, обсуждаем наши выводы и предложения с заказчиком.
                      На этапе аналиткии мы получаем полную картину, на основании которой  планируем дальнейшие шаги. `,
          tips:[
            'Брифинг',
            'Исследования',
            'Анализ'
          ]
        },
        {
          title: 'Strategy',
          description:'Исследуем ситуацию в необходимом секторе рынка, анализируем конкурентов, целевую аудиторию и их скрытые мотивы. Формируем индивидуальный Marketing-Mix из каналов продвижения, которые в синергии друг с другом будут отвечать поставленным бизнес-целям. На данном этапе мы точно определим и разработаем наиболее эффективную стратегию донесения информации до целевой аудитории',
          tips:[
            'Поиск скрытых мотивов',
            'Подбор каналов влияния',
            'План активаций',
            'Контент-стратегия'
          ]
        },
        {
          title: 'Creativity',
          description:'Мы создаем Big Idea -  креативную концепцию (интегрированная, вирусная) коммуникации с целевой аудиторией, которая расширяет представление о бренде заказчика аккумулирует аудиторию вокруг него. Мы всегда создаем релевантный контент.',
          tips:[
            'Креативная концепция',
            'Создание контента',
            'Нейминг'
          ]
        },
        {
          title: 'Ui/Ux design',
          description:`Независимо от креативности проекта, мы составляем визуальный бриф —  карту ваших желаний, на которые мы ориентируемся при создании дизайна.
                      Создаем удобную визуальную форму, которая помогает достичь бизнес-целей, а также делает образ бренда запоминающимся.`,
          tips:[
            'Проектирование',
            'Дизайн-концепция',
            'Интерактив и анимация',
            'Разработка логотипа компании'
          ]
        },
        {
          title: 'Web development',
          description:`В краткие сроки мы креативно разработаем веб-приложение различной сложности: от небольших служб и API до более сложных систем, с помощью которого соберем полную информацию и координаты вашей целевой аудитории.
                      Мы помогаем нашим клиентам на всех этапах создания продукта, шаг за шагом совместно разрабатывая и запуская IT решения.`,
          tips:[
            'Вёрстка',
            'Скриптинг',
            'Программирование',
            'Q/A Тестирование'
          ]
        },
        {
          title: 'Video production',
          description:`Помимо всего мы  имеем огромный опыт в создании рекламных роликов, что помогает донести аудитории информацию о вашем продукте.
                      Мы можем взять на себя всю работу по подготовке ролика, написанию сценария, съемке и монтажу.`,
          tips:[
            'Промо-ролики'
          ]
        },
        {
          title: 'Marketing',
          description:'Мы знаем, как продвинуть сайт в TOП быстрее, где найти пользователей, заинтересованных в товарах и услугах, и превратить их в клиентов. Качественно делаем продвижение бренда в соцсетях для достижения ваших бизнес-целей: увеличения осведомленности о товарах и услугах, вывода на рынок новых продуктов, формирования имиджа бренда.',
          tips:[
            'Поисковое продвижение (SEO)',
            'Контекстная и контекст-медийная реклама (SEM)',
            'Создание с нуля и ведение сообществ (SMM)',
            'Таргетированная реклама в крупных социальных сетях',
            'Организация целевого трафика',
            'Построение воронок продаж'
          ]
        }
      ]
    }
  },
  methods : {
    changeSlide : function (input) {
      if (((this.index + input) > -1) && ((this.index + input) < 7)){
        this.index = this.index + input;
        console.log(this.index);
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
