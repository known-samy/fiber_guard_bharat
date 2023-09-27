/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState } from 'react'

const Page = () => {
  const [active,setActive]=useState(0);

  function handleActive(index){
    setActive(index)
  }

  return (
    <div className='flex p-2 gap-x-2'>     
      <Navigation activeIndex={active} activeChange={handleActive} />
      {active==0 && <ContentSection />}
      {active==1 && <ContentSection1 />}
      {active==2 && <ContentSection2 />}
      {active==3 && <ContentSection3 />}
      {active==4 && <ContentSection3 />}
      {active==5 && <ContentSection3 />}
      {active==6 && <ContentSection3 />}
      {active==7 && <ContentSection3 />}
      {active==8 && <ContentSection3 />}
      {active==9 && <ContentSection9 />}
      {active==10 && <ContentSection10 />}
      {active==11 && <ContentSection11 />}

    </div>
  )
}
export default Page;



export const Navigation = ({activeIndex,activeChange}) => {
  const navTitle=["Wool","Types of Wool","Processing of Wool","Shearing","Scouring","Sorting","Combing","Dyeing","Spinning","Common Sheep Diseases","Methods to Increase Production","Government Schemes"]

  return (
    <div className='h-full w-64 shrink-0 p-3 space-y-2 bg-[#DEDEDE] rounded-md sticky top-0'>

      {
        navTitle.map((ele,index)=> <NavItem key={index} id={index} active={activeIndex==index?true:false} title={ele} activeChange={activeChange}/>)
      }

    </div>
  )
}
export function NavItem({active=false,title,id,activeChange}) {

  return (
    <div className={`w-full p-3  transition-all  hover:bg-orange-600 hover:text-white rounded-lg ${active?"bg-orange-600 text-white":""}`} onClick={()=>activeChange(id)}>
      {title}
    </div>
  )
}



 function ContentSection({title="Wool"}) {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>{title}</div>
        <div className="image  mx-auto mt-5">
        <iframe width="560" className='mx-auto w-full rounded-md overflow-hidden' height="315" src="https://www.youtube.com/embed/YwRbyTCqOQY?si=JW_objFdy-FGDpno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <section className='w-full mt-5'>
        Wool is a natural fiber derived from the fleece of sheep and certain other animals, primarily goats (cashmere and mohair), rabbits (angora wool), and even some camel species. It is one of the oldest and most versatile textile materials known to humanity, with a rich history dating back thousands of years. Here's an explaining description of wool:

<br/><b>1. Natural and Sustainable:</b>
   - Wool is a renewable and sustainable resource. Sheep grow new fleece each year, making wool a natural and eco-friendly choice for textiles.

   <br/><b>2. Exceptional Insulation:</b>
   - Wool is renowned for its outstanding insulation properties. It has the ability to keep you warm in cold weather by trapping air within its fibers, providing excellent thermal regulation. It can also wick moisture away from the body, making it comfortable to wear in various conditions.

   <br/><b>3. Breathable and Moisture-Wicking:</b>
   - Wool fibers are incredibly breathable, allowing them to regulate body temperature by absorbing and releasing moisture. This feature makes wool an ideal choice for activewear and outdoor clothing.

   <br/><b>4. Durable and Resilient:</b>
   - Wool is known for its durability and resilience. It has natural elasticity, allowing it to retain its shape even after repeated stretching and bending. This makes wool garments long-lasting and resistant to wrinkles.

   <br/><b>5. Natural Fire Resistance:</b>
   - Wool is naturally fire-resistant, as it requires high levels of oxygen to ignite. When it does burn, it often self-extinguishes once the heat source is removed.

   <br/><b>6. Versatile:</b>
   - Wool is a versatile material used in various applications, including clothing, blankets, carpets, upholstery, and even industrial uses like insulation.

   <br/><b>7. Sustainable Farming:</b>
   - Sheep farming for wool encourages sustainable land management practices. Sheep graze on natural pastures, helping maintain ecosystems.

   <br/><b>8. Biodegradable:</b>
   - Wool is biodegradable and will naturally decompose without harming the environment.

   <br/><b>9. High-Quality Varieties:</b>
   - Different breeds of sheep produce wool with varying qualities, from fine merino wool, known for its softness, to coarser wools used for rugged applications.

   <br/><b>10. Low Maintenance:</b>
    - Wool is relatively low-maintenance. It has a natural resistance to stains and odors, and many wool garments can be worn several times without needing frequent washing.

    <br/>Wool's unique combination of warmth, breathability, and sustainability has made it a valuable resource in the textile industry. It continues to be a popular choice for a wide range of products, providing comfort and performance in diverse settings. Whether you're wearing a cozy wool sweater or enjoying the softness of a wool blanket, this natural fiber has a timeless appeal and remains a symbol of quality and comfort.
        </section>
    </div>
  )
}
 function ContentSection1() {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>Types of Wool</div>
        <div className="image  mx-auto mt-5">
        <iframe className='mx-auto' width="560" height="315" src="https://www.youtube.com/embed/RWlfgPcCwHg?si=s_0egD0YJPt2oeHK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
        <section className='w-full mt-5'>
          <b>1. Lambswool</b><br />
          Lambswool comes from the first shearing of a young sheep (lamb) which is shorn around seven months. It’s sometimes referred to as virgin wool, though that term also refers to wool that hasn’t yet been processed. The shearing of the lamb at this stage yields extremely smooth, soft and fine wool which also has hypoallergenic properties.<br />
          <b>2. Merino Wool</b><br />
          Merino wool comes from the merino breed of sheep which have their origins in Spain, though much of today’s merino wool is exported from Australia. Merino wool is known for its fine fibers which offer a supremely soft hand and make it a great material for garments like base layers that have direct contact with the wearer’s skin.<br />
          Merino wool also has a lower yield compared to other wools because of the scouring process which is required in order to remove the fatty greases inherent to the material. Scouring washes the wool in chemicals to remove the natural lanolin layer, but the process yields only about half of the initial wool. This laborious process makes merino wool pricier than other wools. Uniqlo makes a marvelous merino wool sweater — and it's super-cheap.<br />
          <b>3. Shetland Wool</b><br />
          Shetland sheep, from the Shetland Islands of Scotland, produce this type of wool. It’s thicker and coarser than other wools like merino — a direct result of the cold climate of the region. This material makes for super-sturdy crewneck sweaters. One of our favorites is this crew neck from Jamieson's of Shetland.<br />
          <br />
          <b>4. Mohair</b><br />  
          Mohair comes from the Angora goat and is distinct from other wools for several reasons. The guard hairs from the topcoat of the goat are often included with the undercoat in the shearing process. Though the fibers are thicker, the mild climate in which Angora goats are grown means it’s not as coarse as other wools — its longer length gives the fiber its smoothness and results in a uniquely fuzzy fabric.<br />
          <b>5. Cashmere</b><br />
          Cashmere is shorn from the undercoat of cashmere (Kashmir) goats when they enter the molting season. Because cashmere is shorn from the undercoat, the yield per goat is small, requiring two cashmere goats to produce a single sweater. The wool produced by these special goats results in an extremely fine fiber with about the same thickness of ultrafine merino and a considerable jump in price.<br />
          One of our favorite cashmere sweaters comes from Everlane.<br />
          <b>6. Angora</b><br />
          Not to be confused with the Angora goat from which mohair wool is made, Angora wool comes from Angora rabbits and is the lightest, finest and warmest of the natural fibers. Angora fibers, like alpaca, are hollow and smooth giving it unrivaled warmth and loft. The fibers are extremely soft, but also very delicate. For this reason, angora is often mixed with other fibers to increase its durability.<br />
          The extreme fineness of angora makes it prone to matting and felting — another reason why it’s mixed with other fibers — but also requires angora breeders to comb the rabbits every day. This intensive process and low yield add up to a hefty price.<br />
          <b>7. Camel Hair</b><br />
          Most camel hair comes from Bactrian camels, which are bred in frigid regions like Mongolia, China and Russia, and is collected when the camel molts in spring. Camel hair is hollow like mohair and is finer and longer than sheep’s wool. The result is a fiber that’s lighter and more lustrous than sheep’s wool and about as soft as cashmere. Though camel hair takes dye well, it is often kept in its natural color, a light, golden brown, and is used synonymously to refer to the color itself.<br />
          <b>8. Alpaca</b><br />
          Alpacas are native to South America and produce hairs that are hollow. This unique property not only makes alpaca lightweight but also adds greater insulation. It is both lighter and warmer than sheep’s wool. Compared to cashmere, alpaca is similarly soft, but notably stronger. Alpaca hair is naturally hypoallergenic as well, making it ideal for those with sensitive skin.<br />
          <b>9. Vicuña</b><br />
          The rarest wool comes from the vicuña, an animal related to the alpaca and llama, originating in the Andes. The vicuña was sacred to the ancient Incas, who prized the wool for its softness and warmth and reserved it for royalty. The wool is finer than cashmere and extremely warm. Because it’s sensitive to chemicals, it’s often left in a natural state, without involving.<br />
          <b>10. Qiviut</b><br />
          Qiviut is wool that comes from the undercoat of the arctic muskox, which is bred in Canada and Alaska. During the muskox’s molting season, the undercoat is shed and breeders either collect the wool through combing or plucking the wool from the ground. Qiviut is finer than superfine sheep’s wool, is softer, stronger and approximately eight times warmer. It also does not shrink in water.<br />

        </section>
    </div>
  )
}

function ContentSection2() {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>Processing of Wool</div>
        <div className="image  mx-auto mt-5">
        <iframe width="560" className='mx-auto w-full rounded-md overflow-hidden' height="315" src="https://www.youtube.com/embed/YwRbyTCqOQY?si=JW_objFdy-FGDpno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        <section className='w-full mt-5'>
            <b>1. Shearing</b><br />
            It is a process where the fleece of the sheep is cut to obtain the wool fibres. One Sheep is sheared once a year by an expert shearer, who shears many shears per day. The fleece of an average sheep roughly ways around 6 to 18 pounds. Most of the sheep are sheared by hand, however, modern technologies have enabled us to shear sheep with computers and robot-controlled arms which are more comfortable to the animal.<br />


            <b>2. Grading and sorting</b><br />
            Grading is the breaking up of fleece based on its quality. It is then sorted into different sections depending on its quality and the body part from which it has been obtained. The best wool fibres are obtained from the shoulder and sides of the sheep and the lowest fibres are obtained from the lower leg of the sheep.<br />
            <br />
            
            <b>3. Scouring</b><br />
            Wool consists of a greasy substance which makes it impure. This greasy substance mainly formed by lanolin, dirt, suint, and sand must be removed to get the pure wool fibres. <br />


            This process of removal of this greasy impurity is known as Scouring. In order to do so, the greasy wool is passed through a series of bowls containing was liquor. The initial 2 to 3 bowls are filled with warm water containing detergent and alkali as these help in removing the major portion of impurities present in the wool fibre. 

            <br />
            The remaining bowls contain freshwater which is used to rinse the fibre. The wool is then passed through a continuous drier followed by a machine that mechanically removes the sand and other insoluble impurities. 
            <br />

            Then the wool fibres are transferred to a bin where it is blended and is conditioned.

            <br />
            <b>4. Carbonising</b><br />
            Carbonising of wool is done to remove the vegetable matter present in it such as seeds, burs and grass. As most of the vegetable impurities are cellulosic in nature, they can be easily removed by dissolving them in a strong solution of sulphuric acid followed by baking in a dryer set. 
            <br />

            After that, the wool fibres pass through a dryer at 95 to 120 degrees centigrade. Then the fibres are passed through fluted rollers which crush carbonised burs. The dust is then removed by the de-dusting roller.
            <br />

            <b>5. Neutralization</b><br />
            The sulphuric acid present in the wool fibre after carbonization is removed by the process of neutralization. The wool fibres are passed through a cold water rinse bowl and subsequently passed through a squeeze roller. 

            <br />
            The fibres are then passed through a soda bath at 37 degrees Celsius followed by an ionic wash. The process of neutralization occurs for around 12 minutes at a pH of about 6.5. The fibres are then dried and passed to the next zone.
            <br />

            <b>6. Carding</b><br />
            After that, the woollen fibres are passed through metal teeth which separate and blend into slivers. This is known as the carding process. This also removes any residual dirt particle as it opens the fibre strand to its individual fibre. 
            <br />

            Carding may be done by hand carders or by drum carders to produce fibres for spinning felting, or other fabric- or cloth-making activities. The carding process hence produces a thin sheet of fibres of uniform thickness which forms a thick strand of untwisted fibres known as a sliver.
            <br />

            <b>7. Backwashing</b><br />
            An additional scouring treatment is performed on the wool slivers after carding to remove any unwanted dirt or impurities picked up by the sliver during carding process. This process is known as Backwashing.
            <br />

            <b>8. Gilling and Combing</b><br />
            Gilling is the process of aligning the wool fibres such that they can lie parallel to each other.
            <br />

            The combing process is generally done to eliminate the short fibres present in the wool fibres.

            <br />
            These two additional process after carding makes the fibres straight, uniform, and unidirectional. Thus making the sliver finer by reducing the weight per unit length of the fibres.

            <br />
            <b>9. Drawing</b><br />
            Here the fibre tops are drawn to thoroughly blend into one. This results in the evenness and regularity of roving material. The top is passed through rollers which reduces the slivers to a definite thickness. A small amount of twist is imparted into the slivers to increase their strength of it.
            <br />

            <b>10. Spinning</b><br />
            One strand of yarn is formed by spinning the fibres together. The fibres cling and stick to one another making it fairly simple to spin wool yarn. 

            <br />
            The spinning of woollen yarn is generally done by mule spinning whereas spinning of worsted yarns is done by any number of the spinning machine. The yarn is then wrapped around a bobbin, cones or drums and transported to the next process.

            <br />
            <b>11. Steaming</b><br />
            To eliminate the snarling effect on yarn, steaming of yarns is done after the Ringframe process. This sets the twist imparted to it and prevents it from snarling. 
            <br />

            The steamed yarn is kept in cool condition for 8 hours such that the yarns can retain the moisture and gets stabilized thus helping the winding process.
            <br />

            <b>12. Weaving of woollen fabric</b><br />
            Finally, the woollen yarn is woven into fabric. Generally, two types of weave are done to weave wool fabrics namely – plain weave and twill weave. Mostly plain weave is used produces which produces fabric of looser weave and gives a soft structure. 

            <br />
            This soft structure is formed due to napping. Although napping reduces the lustre of the fabric still it largely helps in concealing the flaws in the fabric. 
            <br />

            Twill weave is generally used to perform exquisite designs on fine fabric. Worsted yarns are more durable than woollen yarns and hence are much more expensive.
            <br />

            <b>13. Finishing</b><br />
            Finishing is the last step of processing woollen fabric. After the weaving of the woollen fabric, it undergoes a series of finishing processes. Some of these are -<br />
<br />

            <ul className='px-3'>
              <li className='list-disc'>

              Fulling - Here the fabric is immersed in water to make fibre interlock.
              </li>
              <li className='list-disc'>Crabbing – In this process, the interlock formed is permanently set.</li>
              <li className='list-disc'>Decorating – This is done to add lustre to the fabric.</li>
            </ul>
            
        </section>
    </div>
  )
}
function ContentSection3() {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>Shearing of Wool</div>
        <div className="image  mx-auto mt-5">
        <iframe width="560" height="315" className='mx-auto rounded-sm overflow-hidden' src="https://www.youtube.com/embed/zM-ERTTmWv8?si=M87kDpH5gVP29IC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        <section className='w-full mt-5'>
        Shearing usually takes place once
          a year and most woolgrowers
          employ specialist shearing teams,
          who travel across Australia
          shearing sheep for a living.
          Depending on the number of sheep,
          a shearing team can include two
          or more shearers, one or two
          woolhandlers and a wool classer.
          <br/><b>The penner-up</b><br/>
          During shearing, sheep are brought
          in from the paddocks to the yards
          around the shed, ready for penning up.
          The penner-up is responsible for
          keeping the pens (yards) in the
          shearing shed full of sheep, ready for
          the shearers.
          When the sheep have been shorn, they
          leave the shed, are counted, and may
          be treated to prevent diseases before
          being taken back to the paddocks.
          <br/><b>The shearer</b><br/>          
          Each shearer has their own stand,
          electrically-driven machine handpiece
          and small pen of sheep, called a
          catching pen.
          Shearers take a sheep from their
          catching pen and position it at their
          stand for shearing.
          Shearers remove the fleece with a
          number of long strokes with the
          handpiece. After the belly, leg and
          face wool have been removed and
          collected by the woolhandler, the body
          of the fleece comes off as one piece.
          <br/><b>The woolhandler</b><br/> 
          
          As soon as the fleece has been shorn,
          the woolhandler gathers up the fleece
          and throws it across a large table.
          The woolhandlers skirt the fleece.
          Skirting removes the lower-quality
          edges of the fleece, which are kept
          separate from the main fleece wool.
          This can include necks and pieces,
          and soiled wool.
          The remaining fleece is rolled and
          given to the wool classer.
          <br/><b> The wool classer</b><br/> 

         
          The wool classer sorts the wool into
          five main categories — fleeces, necks,
          pieces, bellies and locks.
          Fleeces are also sorted into lines
          (groups) according to their micron.
          The classed wool is placed in nylon
          bags and compressed in the wool 
        </section>
    </div>
  )
}

function ContentSection9() {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>Common Sheep Diseases</div>
        {/* <div className="image  mx-auto mt-5">
        <iframe width="560" className='mx-auto w-full rounded-md overflow-hidden' height="315" src="https://www.youtube.com/embed/YwRbyTCqOQY?si=JW_objFdy-FGDpno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> */}
        <section className='w-full mt-5'>
        <b>1.  Foot Rot :</b><br />
          -  Cause : Foot rot is caused primarily by the bacterium *Dichelobacter nodosus*, with other bacteria often involved in secondary infections.<br />
          -  Symptoms : Affected sheep exhibit lameness, swelling, and foul-smelling discharge between the toes. The hoof becomes soft and spongy.<br />
          -  Transmission : It spreads through contaminated pasture, especially in wet and muddy conditions.<br />
          -  Treatment : Treatment involves cleaning and trimming affected hooves, as well as administering antibiotics. Vaccination and good hoof management are important for prevention.<br />

          <b>2.  Scrapie :</b><br />
          -  Cause : Scrapie is a transmissible spongiform encephalopathy (TSE) caused by abnormal prion proteins.<br />
          -  Symptoms : Sheep may display behavioral changes, itching, muscle tremors, incoordination, and difficulty walking. It's usually fatal.<br />
          -  Transmission : It is transmitted through direct contact with infected sheep or contaminated environments.<br />
          -  Prevention : There is no cure, so prevention relies on genetic selection and culling of affected animals.<br />
          
          <b>3.  Internal Parasites (Gastrointestinal Worms) :</b><br />
          -  Types : Common internal parasites in sheep include Haemonchus contortus (barber pole worm), Trichostrongylus, and Ostertagia species.<br />
          -  Symptoms : Infected sheep may suffer from weight loss, anemia, diarrhea, and reduced productivity.<br />
          -  Control : Regular deworming, pasture rotation, and fecal egg counts help manage internal parasite infestations.<br />

          <b>4.  External Parasites (Mites and Lice) :</b><br />
          -  Types : Sarcoptic and psoroptic mange mites, as well as various lice species, can affect sheep.<br />
          -  Symptoms : Infested sheep may experience intense itching, hair loss, skin irritation, and secondary infections.<br />
          -  Treatment : Sheep dips, pour-on treatments, and good hygiene practices are used to control external parasites.<br />

          <b>5.  Ovine Progressive Pneumonia (OPP) :</b><br />
          -  Cause : OPP is caused by a retrovirus.<br />
          -  Symptoms : It can result in chronic respiratory issues and decreased milk production in ewes.<br />
          -  Transmission : It spreads through close contact with infected animals, especially through colostrum and milk.<br />
          -  Prevention : There is no cure, so prevention involves segregating infected sheep, culling carriers, and testing replacement animals.<br />

          <b>6.  Enterotoxemia (Overeating Disease) :</b><br />
          -  Cause : It is caused by *Clostridium perfringens* bacteria.<br />
          -  Symptoms : Affected sheep may die suddenly with signs of bloating, convulsions, and colic.<br />
          -  Prevention : Vaccination and careful feeding management to avoid sudden dietary changes help prevent enterotoxemia.<br />

          <b>7.  Foot Abscesses :</b><br />
          -  Cause : Foot abscesses can result from puncture wounds or secondary infections, often in the presence of foot rot.<br />
          -  Symptoms : Sheep exhibit lameness, reluctance to walk, and swelling around the hoof.<br />
          -  Treatment : Affected areas are cleaned, drained, and treated with antibiotics. Proper hoof trimming and hygiene are essential for prevention.<br />

          <b>8.  Bluetongue :</b><br />
          -  Cause : Bluetongue is caused by the bluetongue virus, transmitted by biting midges (Culicoides species).<br />
          -  Symptoms : Sheep may display fever, facial swelling, oral lesions, and lameness.<br />
          -  Prevention : Vaccination of sheep and control of midge populations are crucial for preventing bluetongue.<br />

          <b>9.  Caseous Lymphadenitis (CL) :</b><br />
          -  Cause : CL is caused by *Corynebacterium pseudotuberculosis* bacteria.<br />
          -  Symptoms : It leads to abscesses in lymph nodes, which can rupture and drain.<br />
          -  Control : Isolation of infected animals, culling, and good management practices are key for control.<br />

          <b>10.  Pregnancy Toxemia (Twin Lamb Disease) :</b><br />
            -  Cause : It occurs due to an energy imbalance, often in late pregnancy.<br />
            -  Symptoms : Sheep may appear weak, wobbly, and uncoordinated, and they may eventually go into a coma.<br />
            -  Treatment : Providing energy-rich feeds, like propylene glycol, and assisting with lambing can help. Prevention involves proper nutrition and monitoring pregnant ewes.<br />

            
        </section>
    </div>
  )
}


function ContentSection10() {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>Methods to Increase Wool Production</div>
        {/* <div className="image  mx-auto mt-5">
        <iframe width="560" className='mx-auto w-full rounded-md overflow-hidden' height="315" src="https://www.youtube.com/embed/YwRbyTCqOQY?si=JW_objFdy-FGDpno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
        <section className='w-full mt-5'>

        Increasing wool production in a sheep flock requires a combination of good management practices, genetics, nutrition, and health care. Here are some methods to help boost wool production:<br/>

<b>1. Select the Right Breeds:</b><br/>
   - Choose sheep breeds known for their wool production, such as Merino, Rambouillet, and Corriedale. Different breeds have varying wool quality and quantity characteristics.<br/>

<b>2. Genetic Selection:</b><br/>
   - Select and breed sheep with desirable wool traits, such as fine, dense, and uniform fleece. Use performance records and genetic testing to identify superior animals.<br/>

<b>3. Nutrition:</b><br/>
   - Provide a balanced and high-quality diet rich in protein, energy, and essential minerals. Adequate nutrition is essential for healthy wool growth.<br/>
   - Supplement the diet as needed, especially during periods of high nutritional demand, such as pregnancy and lactation.<br/>

<b>4. Pasture Management:</b><br/>
   - Maintain good pasture management practices to ensure access to nutritious forage year-round.<br/>
   - Rotate pastures to prevent overgrazing and reduce the risk of internal parasite infestations, which can affect wool production.<br/>

<b>5. Health Care:</b><br/>
   - Implement a comprehensive health care program to control common sheep diseases that can impact wool production, such as foot rot, internal parasites, and external parasites.<br/>
   - Regularly vaccinate and deworm sheep as recommended by a veterinarian.<br/>

<b>6. Shearing Management:</b><br/>
   - Schedule regular and timely shearing to prevent excessive wool growth that can lead to matting, contamination, and reduced wool quality.<br/>
   - Ensure that shearers are skilled and use proper techniques to minimize stress and injury to the sheep.<br/>

<b>7. Flock Management:</b><br/>
   - Implement good flock management practices, including proper handling, housing, and hygiene, to reduce stress and maintain overall flock health.<br/>
   - Separate and manage sheep based on age, sex, and wool quality to optimize wool production.<br/>

<b>8. Wool Handling and Storage:</b><br/>
   - Handle wool carefully to minimize contamination and damage during shearing, sorting, and packaging.<br/>
   - Properly store wool in a clean, dry, and well-ventilated area to maintain its quality.<br/>

<b>9. Record Keeping:</b><br/>
   - Keep detailed records of individual sheep, including fleece characteristics, health history, and breeding data. This information helps in making informed management decisions.<br/>

<b>10. Breeding Program:</b><br/>
    - Develop a selective breeding program that focuses on wool traits. Use rams with superior genetics for wool production to improve the flock's overall wool quality and quantity.<br/>

<b>11. Sheep Welfare:</b><br/>
    - Ensure that sheep are healthy and stress-free, as stress can negatively affect wool production. Provide proper shelter, handling, and care for your flock.<br/>

<b>12. Consult a Veterinarian and Wool Expert:</b><br/>
    - Regularly consult with a veterinarian and wool expert to assess the health and quality of your flock's wool. They can provide specific recommendations tailored to your flock's needs.<br/>



            
        </section>
    </div>
  )
}
function ContentSection11() {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>Government Wool Schemes</div>
        {/* <div className="image  mx-auto mt-5">
        <iframe width="560" className='mx-auto w-full rounded-md overflow-hidden' height="315" src="https://www.youtube.com/embed/YwRbyTCqOQY?si=JW_objFdy-FGDpno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
        <section className='w-full mt-5'>
        <b>1. Integrated Wool Development Program (IWDP):</b><br />
          - The IWDP is a centrally sponsored scheme aimed at the holistic development of the wool sector in India. It focuses on improving the quality and quantity of wool production, promoting sheep farming, and enhancing the socio-economic conditions of wool growers.<br />
          - Components of the IWDP include breed improvement, health care for sheep, wool processing, and training and extension services.<br />

          <b>2. National Livestock Mission (NLM):</b><br />
          - NLM is a flagship program of the Indian government that encompasses various livestock-related activities, including sheep rearing and wool production.<br />
          - Under NLM, financial support is provided for breed improvement, fodder development, and skill development for livestock keepers, which indirectly benefits the wool sector.<br />

          <b>3. Rashtriya Krishi Vikas Yojana (RKVY):</b><br />
          - RKVY is a centrally sponsored scheme that supports various agricultural and allied sectors, including sheep farming and wool production.<br />
          - Funding under RKVY can be utilized for activities such as breed improvement, disease control, infrastructure development, and training in the wool sector.<br />

          <b>4. Promotion of Sheep and Wool Sector under AICRP (All India Coordinated Research Project):</b><br />
          - AICRP is a research and development initiative that focuses on improving the productivity and quality of wool and sheep production.<br />
          - Research centers and institutions across India collaborate on projects related to sheep breeding, nutrition, health, and management.<br />

          <b>5. Wool Development Board:</b><br />
          - The Wool Development Board, under the Ministry of Textiles, plays a key role in promoting the wool sector. It provides support for modernization, capacity building, and technology upgradation in the wool industry.<br />

          <b>6. State-Specific Schemes:</b><br />
          - Various Indian states also implement their own schemes and initiatives to promote sheep farming and wool production. These schemes often complement the central government's efforts.<br />

          <b>7. Financial Assistance and Subsidies:</b><br />
          - Sheep farmers and wool producers may be eligible for financial assistance, subsidies, and credit facilities under various government schemes to support their activities.<br />

            
        </section>
    </div>
  )
}


