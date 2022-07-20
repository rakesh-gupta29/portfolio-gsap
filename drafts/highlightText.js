import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);
export default function Banner() {
  let elem = useRef();
  useEffect(() => {
    scrollTrigger.create({
      trigger: elem,
      start: "top center",
      end: "bottom  top",
      toggleClass: "bg-size-full",
    });
  });
  return (
    <>
      <div className="h-screen"></div>
      <div className=" d mt-20   ">
        <h1 className="text-2xl leading-10  font-averta text-dark  px-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          aliquam ad, nesciunt quos odio saepe magni quidem, in dolore
          reprehenderit ducimus, est iusto officia assumenda. Ipsum blanditiis
          cumque nobis aut tempore dicta nemo voluptatum. Non vero recusandae
          autem quia nesciunt corporis earum illo natus ut voluptas modi, ea,
          magnam eaque dolorum nemo esse deserunt dolores libero id tempore amet
          dolorem itaque. Exercitationem nisi, neque sint a minima corporis quo
          quasi nesciunt repellat molestias omnis quia ea. Et eaque enim esse
          facere nesciunt, odit at? Inventore cupiditate tenetur expedita ex ad
          officia dolore, magnam animi necessitatibus sapiente quam
          exercitationem maxime odio harum quod, rem ea consequatur quia. Vero
          neque iste natus mollitia quisquam repellendus libero necessitatibus
          atque recusandae labore nesciunt est consectetur, suscipit blanditiis
          voluptatem. Qui non, ullam, nihil deserunt saepe reprehenderit
          repellat dolore cupiditate tempore minima iusto ad odio nostrum
          dolorum ipsam. Ea numquam reiciendis omnis officia iusto eaque
          aliquam, distinctio sit libero, aperiam mollitia fuga repellat, quo
          nesciunt velit eius pariatur laboriosam atque sint ipsa quod ut.
          Voluptatem doloribus ad et commodi excepturi neque cum, in quod, nemo
          dolorum id laudantium eligendi fugit nobis quo aliquid fugiat vitae
          nam qui repellendus architecto reprehenderit itaque! Ea,
          <span
            ref={(el) => (elem = el)}
            className=" bg-gradient-to-r from-red to-red bg-size-zero transition-all duration-500 bg-no-repeat"
          >
            {" "}
            eligendi! Corrupti doloremque aliquam ipsa. Voluptatum neque, hic
            dignissimos excepturi aliquid cum natus reprehenderit quod voluptate
            atque voluptas sed cumque. Consequatur, sequi. Reprehenderit, odit
            odio? Minus dignissimos ipsum officia saepe ad? Omnis commodi
            dolorem obcaecati aliquam voluptatum asperiores harum excepturi,
            iusto impedit, repellendus{" "}
          </span>{" "}
          sint quaerat perspiciatis beatae officiis non quam doloribus! Minima
          totam dolorum voluptatum expedita quis eos repellendus doloremque
          numquam, aut vel fuga vero doloribus. Ipsum ducimus laboriosam
          nesciunt cumque error. Doloremque culpa alias excepturi quas numquam
          ducimus maxime sequi amet ab aperiam voluptatem corrupti saepe totam
          cum nisi dignissimos blanditiis a facere nesciunt molestiae odit, aut
          vel pariatur minima. Explicabo sint cum aspernatur omnis deserunt
          architecto, soluta veniam libero perspiciatis ipsa laudantium qui
          obcaecati accusantium aut placeat tempora, repellat deleniti iusto, a
          et voluptatem quasi atque pariatur! Fugiat quaerat deserunt ex
          voluptatum nemo error recusandae dolore non. Reiciendis nobis atque
          beatae cum amet corrupti consequatur dolor dolorem dolores maiores?
          Reiciendis suscipit rem ipsa atque optio dicta veniam est. Aliquam
          nulla quam eveniet, inventore sequi adipisci totam cumque ea laborum,
          quisquam ducimus earum voluptatum maxime quae corrupti tempora unde ut
          vel mollitia iusto sit omnis. Explicabo fugiat odit exercitationem
          tempora illo qui voluptatum adipisci vel, ducimus saepe excepturi
          ipsum corrupti, ratione, pariatur harum. Illo perspiciatis repellat
          asperiores sunt architecto consequuntur reiciendis minus quidem
          maiores molestias corporis, iusto natus esse aperiam accusantium
          laudantium eos, ipsam vel. Omnis, magnam eum illum nobis, deserunt
          quaerat praesentium, in enim tempore laudantium iste! Deserunt officia
          vel nobis dignissimos voluptatum optio quos velit sequi saepe facere
          cumque, placeat laboriosam? Sed, error et suscipit, aperiam mollitia
          vitae ducimus molestias amet tenetur aliquam beatae quidem ea enim
          nobis veniam excepturi maxime libero iusto? Quasi corrupti eaque
          commodi in! Neque quae dolores reiciendis quidem hic dicta voluptas
          sit fuga eveniet nisi eius, labore doloribus vitae, cum consequuntur a
          laudantium! Vitae necessitatibus, ex natus dolore deserunt magni
          mollitia similique temporibus non, ducimus quod asperiores eligendi
          ad, aliquam labore doloremque? Odit placeat dolores accusantium odio
          veniam consequatur corporis expedita ducimus illo? Dolor adipisci quae
          cumque asperiores repellendus accusamus modi assumenda voluptate quod!
          Tempora, aspernatur amet pariatur optio suscipit nesciunt fugiat? Cum
          doloremque repellat excepturi eveniet sapiente ex facilis, omnis
          necessitatibus ipsam soluta quas consectetur cupiditate ullam fugit
          sint veniam quaerat illum voluptatibus neque vel quod expedita?
          Ducimus architecto fugit facere. Quaerat rem eos a voluptas
          consequuntur consectetur, corporis ipsam eaque fuga eligendi alias
          quibusdam aperiam suscipit laborum maiores totam, accusamus assumenda
          tenetur aut. Illo assumenda repellat porro inventore sequi eveniet
          voluptatum quam suscipit. Nulla magnam atque vel similique? Nesciunt
          in inventore deleniti velit sunt soluta voluptatem eius temporibus
          itaque dolores laborum odio fuga consequuntur sequi quia id, amet modi
          tenetur laboriosam. Laudantium fugit aspernatur consequuntur dicta
          vitae dolor consequatur, ut earum voluptas expedita perferendis
          corrupti? Iure, fugit quaerat totam veritatis enim nostrum aliquid
          soluta placeat quae illo distinctio obcaecati doloribus expedita,
          dolores fugiat repellendus amet! Pariatur quia accusamus obcaecati
          itaque nihil, consequuntur veniam adipisci aspernatur nulla molestiae
          quo nesciunt molestias quas maiores cupiditate atque iure, id sapiente
          amet rem ab ex? Magni id neque ab. Recusandae, labore aspernatur
          deserunt eligendi quasi atque accusantium nisi, enim quos delectus
          obcaecati. Corrupti expedita eius dolores reiciendis debitis rem dicta
          obcaecati nobis nam, quod eos. Laudantium iusto, reprehenderit rerum
          voluptatem ratione magnam possimus repudiandae laborum aperiam
          doloribus porro vitae molestiae eligendi corrupti quae incidunt illum.
          Distinctio quidem recusandae dolore temporibus vel architecto quam
          cumque facere iste ratione incidunt eveniet, eaque, atque nisi?
          Voluptas distinctio vero pariatur nesciunt explicabo atque quidem
          nemo, praesentium, modi fugiat, eius aut quisquam animi qui unde
          voluptate fuga error cupiditate? Dolore, obcaecati accusantium harum
          debitis voluptates cumque inventore impedit sunt tenetur officiis, qui
          doloremque quo! Nesciunt reiciendis molestias suscipit iure aperiam?
          Qui vitae quibusdam est dolorem explicabo voluptatum harum quod hic
          quos beatae quam neque, velit ut autem reprehenderit eligendi
          molestias, voluptatibus necessitatibus corrupti quia dolore esse
          rerum, porro placeat? Modi omnis aspernatur incidunt culpa corrupti
          sed quod, maxime dolore eligendi architecto accusantium enim quidem
          accusamus aut quasi expedita mollitia facere perspiciatis itaque id.
          Repellat fugit blanditiis ut deleniti rerum aspernatur facere odit,
          autem ducimus quae commodi quod itaque expedita delectus distinctio
          animi minima velit accusamus? Quos exercitationem autem voluptatem
          animi repudiandae eaque, enim eius saepe rem sequi numquam. Non,
          tempore minus accusantium impedit nemo itaque natus aut ex veritatis
          illum delectus cupiditate sequi doloremque asperiores iusto quo
          nostrum cum eveniet maiores recusandae expedita velit corporis odit
          necessitatibus! Quam, pariatur ipsa quasi repudiandae corporis esse
          atque voluptate eligendi labore ut aspernatur consequuntur est libero
          fuga officiis corrupti eos illo dignissimos aperiam sapiente vero
          nostrum doloribus quo? Voluptatem omnis sit laudantium saepe
          asperiores accusantium neque architecto cupiditate rem, expedita quam
          dignissimos officia facilis distinctio aliquid. Architecto aliquid
          nemo in neque laboriosam eius perferendis quibusdam officia ratione
          fugit quis obcaecati ea expedita fugiat iste velit accusamus odio,
          sint exercitationem libero. Quasi veniam accusantium deleniti quisquam
          voluptas.
        </h1>
      </div>
    </>
  );
}
