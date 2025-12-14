import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });

    const letterSpacing = useTransform(scrollYProgress, [0.5, 0.6], ["5rem", "0rem"])
    const titleOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0.1, 1])
    const rectangleClipPath = useTransform(scrollYProgress, [0.5, 0.6], [
        "circle(0% at 0 50%)",
        "circle(300% at 0 50%)"
    ])
    const textScale = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1]);


    const clipPath = useTransform(scrollYProgress, [0, 0.5], [
        "circle(0% at 0 50%)",
        "circle(300% at 0 50%)"
    ]);

    return (
        <section className="darkSec min-h-[100vh] h-auto p-0" >
            {width >= 900 && <motion.div ref={ref} style={{ clipPath }} className="h-[300vh] flex items-center  justify-center flex-col relative bg-black text-center">
                <motion.h1 style={{ letterSpacing, opacity: titleOpacity, mixBlendMode: "difference" }} className="font-[500] text-[40vh]  text-[#fff] text-center sticky top-[10%] mx-auto " >Skills</motion.h1>
                <motion.div transition={{ type: "spring" }} className="bg-white w-full h-[150px] translate-y-[300px] " style={{ mixBlendMode: "difference", clipPath: rectangleClipPath }}>

                </motion.div>
            </motion.div>}

           {width < 900 &&  <motion.div ref={ref} style={{ clipPath }} className="h-[300vh]  flex items-center  justify-center flex-col relative bg-black text-center">
                <motion.h1 style={{opacity: titleOpacity, mixBlendMode: "difference",scale:textScale }} className="font-[500] text-[15vh]  text-[#fff] text-center sticky top-[30%] mx-auto " >Skills</motion.h1>
                <motion.div transition={{ type: "spring" }} className="bg-white w-full h-[150px] translate-y-[300px] " style={{ mixBlendMode: "difference", clipPath: rectangleClipPath }}>

                </motion.div>
            </motion.div>}

            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi error reprehenderit, distinctio explicabo dolorum illo ex! Possimus harum deleniti reprehenderit esse qui inventore nihil? Tenetur, temporibus cupiditate rerum similique quidem ducimus labore alias voluptate, molestiae mollitia odio debitis eos hic saepe dicta commodi. Expedita libero tempora aperiam voluptatum voluptas rerum dolorem ab quibusdam inventore eius sequi vitae similique atque consequatur tempore placeat suscipit error voluptate architecto, ea nesciunt incidunt? Modi quis porro, quia sequi facilis nisi illo voluptatibus nulla quos vero? Rerum ab, debitis exercitationem voluptate asperiores mollitia vero numquam assumenda eveniet aliquam nulla, consectetur ut pariatur fugit cum temporibus a. Qui veniam a reprehenderit magni voluptas quaerat. Velit eius doloremque nam repudiandae ipsam illum ipsum magni non aperiam. Ad, quaerat architecto nostrum magnam adipisci sed voluptatem qui iusto porro delectus eveniet dolore. Alias illum reprehenderit nesciunt sint, at ullam perspiciatis minima cumque? Dicta provident cumque veniam maxime quae aut? Debitis vitae rem eligendi quae ducimus. Neque, nulla sint iusto nisi fugit in minima possimus, minus quasi voluptatum reiciendis labore totam voluptatem necessitatibus fuga modi maiores doloremque recusandae magnam ullam inventore veritatis atque deleniti nihil! Aperiam modi quae tenetur debitis iste odio, recusandae molestias maiores dignissimos eaque id nesciunt atque magnam ea nulla, in assumenda, nihil rem. Facilis dolorem sunt praesentium earum non eligendi, rerum quod qui incidunt quasi obcaecati soluta necessitatibus odit sint eius? Quam maiores nesciunt delectus dolores? Fugiat, ab vero molestias dolorem, nesciunt illum a rerum, enim facere ullam eaque voluptatibus porro quis sequi. Non eum odio cupiditate nemo asperiores facere laborum doloribus ut sit quidem tenetur, illo optio vel culpa minus aperiam ipsum voluptatem dignissimos ea iure! Voluptates iste nulla fuga dolor architecto. Voluptatum, delectus, ratione consequuntur dolorum asperiores facere vero sed aliquam dicta temporibus ipsum laborum dolor molestiae. Enim veritatis quaerat nulla. Blanditiis inventore asperiores aliquam, deleniti debitis corrupti ipsum animi enim omnis dicta, nam adipisci voluptatum cumque exercitationem doloremque amet! Accusamus quasi vero, cum, eos quae, expedita ipsum repellendus quod corporis autem nulla. Saepe natus excepturi illo iusto aliquid, veritatis temporibus ab! Distinctio in, molestias nisi exercitationem repudiandae delectus quidem laudantium tempora, aut dolorem officiis architecto ipsum aperiam facere, numquam quisquam. Voluptas suscipit tenetur distinctio! Non sequi dignissimos magni excepturi provident optio veniam fugiat omnis quas quo? Quaerat totam pariatur corrupti voluptate iusto, voluptas architecto amet, obcaecati id molestias vitae fugiat ab! Delectus minima velit quo perferendis dolor mollitia necessitatibus, commodi porro blanditiis ullam ad praesentium vel quas nostrum laudantium, laboriosam est, inventore accusantium et in veniam? Enim, cupiditate incidunt, aperiam inventore reprehenderit sed nulla ipsa illum reiciendis facere magni impedit perspiciatis molestias consequuntur nihil debitis praesentium quidem accusantium! Quam dolorum incidunt eveniet facere? Ipsum similique laudantium sint quisquam eius repudiandae in delectus illum minus fugit dolorum quasi quam ut necessitatibus, magnam ad! Sed, cupiditate, voluptatibus amet enim provident deserunt esse molestiae in id reiciendis quam, similique magni necessitatibus. Doloribus, saepe nulla! Ipsum inventore magni magnam commodi architecto fuga earum dolores veniam, nemo perspiciatis maiores dolorum voluptatem tempora, quos assumenda asperiores officia eius reiciendis at temporibus ipsa quisquam! Accusamus, officiis magnam minima et aliquam quisquam sit pariatur facere velit esse, sunt numquam, nostrum illo maxime voluptatum fugit aut qui veniam iusto atque! Iure consequuntur iusto ab debitis accusantium molestiae! Numquam quam dolores sint inventore, placeat, odit id voluptates minima soluta voluptas porro similique hic qui vel amet corporis delectus laudantium pariatur corrupti non tempore deserunt ducimus voluptatibus? Iste, esse hic laboriosam illo, sunt quidem sequi quod reiciendis fugit, at dicta amet dignissimos! Dolores mollitia molestiae beatae rerum nesciunt. Deserunt suscipit voluptate unde ab saepe blanditiis inventore labore id repudiandae corrupti voluptatem dolorum quos earum odit quo obcaecati eligendi, error ipsum nam ut similique placeat non necessitatibus laborum! Quaerat quas voluptatum dolorum laudantium sed autem tempore accusamus maiores ipsum. Ipsa, nisi nulla, maiores illo doloremque illum minima eos dolor temporibus omnis est, adipisci praesentium deserunt architecto. Id, tenetur similique perferendis veniam a esse vitae ab consequatur nemo quidem dolores corrupti et alias architecto, suscipit tempora accusamus adipisci dolorem quod repellendus necessitatibus. Aut quo eius deserunt vero vitae facilis quasi dolores id laudantium aspernatur error voluptatum optio quas assumenda architecto, dignissimos magni dolor reiciendis autem eaque. Ducimus eveniet recusandae, repudiandae nisi quaerat voluptates distinctio labore eum iusto eligendi qui quisquam quae placeat. Rem eligendi placeat nam ut perspiciatis temporibus molestias nemo maxime officiis, veniam tempora labore minima unde cum asperiores aliquam reiciendis libero. Ullam natus architecto quaerat quas reprehenderit nisi, dolorum dolores, animi illo rerum rem beatae ratione modi, quae tenetur recusandae? Iure explicabo cupiditate quisquam, vel similique architecto a commodi itaque? Similique mollitia provident qui quasi expedita tenetur accusantium recusandae a voluptate? Ratione odio quisquam minima delectus corporis dolorum quis pariatur quam odit dolores molestiae temporibus eligendi reiciendis veniam, in nobis error! Praesentium blanditiis delectus velit eum amet dolorum labore necessitatibus, ea ullam earum, non corrupti dolores repellendus inventore dicta voluptates ipsa, debitis architecto. Fugiat minus reprehenderit aspernatur dignissimos laboriosam consectetur atque aliquam quam ex nobis inventore maiores, in temporibus quos eligendi cumque assumenda eaque, animi illum earum minima, nulla nihil? Hic iusto adipisci a odio, rem porro quod quidem sit, totam recusandae ut excepturi. A, ut. Ullam maiores deserunt corrupti nemo rem iste assumenda maxime, similique itaque animi harum quasi asperiores eaque omnis iusto facere, ipsam voluptatum architecto atque nisi non laborum dicta dolorem! Quibusdam, voluptatibus ea. Distinctio eum maiores eveniet tenetur voluptatum voluptatibus commodi a magnam hic molestiae, ad ullam mollitia blanditiis vitae excepturi perferendis aliquam! Reiciendis ipsa doloremque quasi corrupti esse error voluptas soluta nihil aspernatur non nam facilis sequi natus, aliquam est exercitationem placeat ab voluptatem. Delectus voluptas maiores, odit pariatur consequatur recusandae tempore quas ipsam quae. Incidunt dolores doloribus quisquam quam amet, assumenda nam praesentium nulla odit eum eius aut odio molestias quia eaque nihil aspernatur ea quae neque excepturi, doloremque, accusantium ducimus consequuntur perspiciatis! Aspernatur veniam assumenda iste dolor sapiente officiis obcaecati. Illum, excepturi ullam pariatur libero inventore est quaerat vero! Est ipsa vitae, sit saepe quidem pariatur neque distinctio sed nisi. Ea dolores nemo quidem quae quo nulla?</h1>
        </section>
    )
}
