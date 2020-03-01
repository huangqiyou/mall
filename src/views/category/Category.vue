<template>
<div class="wrapper" ref="aaa">
 <ul class="content">
  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum beatae quae alias non harum, ipsa voluptas soluta veniam quisquam ratione autem, earum dolor cum quo eligendi laborum ea commodi at?
  Autem architecto numquam nisi placeat porro aperiam molestiae, eum esse. Debitis eligendi quibusdam ipsum mollitia nisi dolorem dignissimos modi! Reprehenderit eum quaerat aperiam delectus fugit temporibus, reiciendis tempora et illo!
  Quae enim nostrum autem laborum ea ipsum. Sapiente odio porro quaerat delectus? Cupiditate ullam eveniet eaque sed temporibus fugiat autem distinctio cum quas dolor veniam quo recusandae, obcaecati, exercitationem laboriosam!
  Tenetur sit obcaecati esse id sed amet doloribus a. Nam asperiores dicta, beatae, commodi necessitatibus quod obcaecati veniam libero quae ullam placeat qui molestiae, incidunt at quisquam voluptates illum quia.
  Impedit at ratione quisquam nostrum sint nemo voluptate ipsa, officia laudantium odit explicabo, id porro sit placeat! Dolor perspiciatis, quos, numquam impedit perferendis voluptas qui ab voluptatibus quod repellat officiis.
  Aut repellat accusamus, mollitia distinctio, quam nostrum exercitationem quos, hic maxime delectus repudiandae quibusdam? Ea, qui? Fugit inventore recusandae incidunt porro perferendis quia eum iusto exercitationem. Asperiores neque quibusdam iusto.
  Quaerat totam expedita incidunt placeat voluptatibus recusandae, eum natus ex laboriosam, quos est obcaecati sequi fugit quasi in, quas maiores? Saepe atque magnam iste laboriosam ducimus eveniet officiis at! Iusto.
  Quidem asperiores labore, aliquid numquam odio, quae commodi eveniet debitis voluptate exercitationem consectetur sit natus. Voluptatum necessitatibus ipsum nesciunt earum culpa possimus voluptatem consequatur? Molestias quaerat rerum ad. Vero, voluptatibus?
  Molestias maxime excepturi beatae quae ipsam temporibus veniam consequatur. Sequi deleniti repellat molestiae quasi eius, sunt illo exercitationem numquam fugiat pariatur atque repudiandae quo soluta ad labore, maxime nisi magnam.
  Quos, debitis dolorum, animi a suscipit itaque ipsa corporis voluptate doloremque quidem nisi cumque earum neque culpa ab qui iste, quisquam incidunt sunt tempora temporibus repellendus labore! Numquam, mollitia accusamus!
  Ut perferendis voluptatem dolor neque iure quas, ducimus dignissimos dolores excepturi cumque culpa repellat. Veniam ipsa mollitia perspiciatis ipsam quas ut doloribus ad sunt eaque magnam, aspernatur unde molestias nesciunt.
  Ut in sed voluptate, eius harum odio eos recusandae voluptatem a corrupti mollitia facere et suscipit deserunt ad ratione sequi quia provident libero ducimus! Asperiores beatae eum sed. Iure, esse.
  Cupiditate obcaecati, molestiae ullam, atque consequuntur nostrum nulla eligendi voluptatibus corrupti facilis beatae. Pariatur quo numquam ratione rem accusantium debitis natus earum libero provident? Harum porro labore numquam nulla quasi!
  Quam aliquid delectus iure architecto voluptate illum minus dolore. Voluptates ullam, ex nostrum praesentium, id voluptas aliquam sapiente iste rerum quibusdam sint reprehenderit modi debitis quo explicabo, blanditiis aspernatur nesciunt.
  Id exercitationem possimus commodi eum! Aut natus ab iure, earum corporis cupiditate expedita assumenda sit quas, voluptatibus voluptate dolores at. Optio recusandae accusamus qui pariatur in adipisci. Ad, fuga vel!
  Autem facere rerum vero sed velit corrupti illum modi consectetur deserunt accusantium delectus, necessitatibus ea voluptates labore in dolore veniam voluptatibus earum natus suscipit temporibus molestiae hic nam quo. Iure.
  Tempora quasi modi in corrupti tenetur veniam consectetur corporis, possimus consequuntur ipsa debitis fugiat animi. Ut ab eveniet repellendus nisi eos unde veniam iusto. Consequatur laboriosam dignissimos totam deleniti? Numquam.
  Iure tempore amet minus id labore! Impedit, doloribus nostrum nemo nulla consequatur obcaecati esse? Unde, nam vitae cupiditate autem, error magni neque voluptatem a amet reiciendis quia dolorem est obcaecati.
  Quam suscipit, ducimus sint quaerat, quidem quod explicabo placeat veritatis, quasi consequatur rem amet voluptatem sunt iusto? Quia inventore, tempore labore earum repellendus molestiae voluptatibus nisi eum magni at cum.
  Sed nesciunt a qui optio illo, sunt laboriosam. Adipisci laboriosam mollitia deserunt, commodi doloribus aliquam porro dolor quasi error dolores explicabo repellat officiis totam illum consectetur ut optio earum eaque?</li>
 </ul>
</div>
 
</template>

<script>
import BScroll from 'better-scroll'
 export default {
  name:'Category',
  data() {
   return {
    scroll: null
   }
  },
  mounted(){
   this.scroll = new BScroll('.wrapper',{
    probeType:3,pullUpLoad:true
   })
   this.scroll.on('scroll',(position) => {
    // console.log(position)
   })
   this.scroll.on('pullingUp',() => {
    console.log('上啦加载更多')
   })
  },
 }
</script>

<style scoped>
.wrapper{
 height: 150px;
 background-color: red;
}
</style>