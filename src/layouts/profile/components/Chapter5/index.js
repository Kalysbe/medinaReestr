import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Chapter5() {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          РАЗДЕЛ V. НАЛОГОВОЕ ПРАВОНАРУШЕНИЕ И ОТВЕТСТВЕННОСТЬ ЗА ЕГО СОВЕРШЕНИЕ
        </AccordionSummary>
        <AccordionDetails>
        <p><strong>Глава 18. Общие положения об ответственности за совершение налоговых правонарушений</strong></p>
      <p><strong>Статья 155. Понятие налогового правонарушения</strong></p>
      <p>Нарушением налогового законодательства Кыргызской Республики или налоговым правонарушением является виновно-совершенное противоправное деяние (действие или бездействие) участника налоговых правоотношений.</p>
      <h1>Статья&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 156.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; за&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; совершение&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; налогового правонарушения</h1>
      <ol>
        <li>Ответственностью за совершение налогового правонарушения является правовое последствие совершения налогового правонарушения, выражающееся в осуждении и применении мер взыскания судом либо компетентным органом (должностным лицом) к участнику налоговых правоотношений, виновному в совершении налогового правонарушения.</li>
        <li>Ответственность за совершение налогового правонарушения устанавливается настоящим Кодексом, законодательством о правонарушениях и уголовным законодательством Кыргызской Республики.</li>
      </ol>
      <h1>Статья&nbsp;&nbsp;&nbsp; 157.&nbsp;&nbsp;&nbsp;&nbsp; Участники&nbsp;&nbsp;&nbsp; налоговых&nbsp;&nbsp;&nbsp; правоотношений,&nbsp;&nbsp;&nbsp; подлежащие привлечению к ответственности за совершение налогового правонарушения</h1>
      <p>В случаях, предусмотренных настоящим Кодексом, ответственность за совершение налогового правонарушения несут:</p>
      <ul>
        <li>налогоплательщик, его должностные лица и/или законные представители (родители, опекун, попечитель);</li>
        <li>органы налоговой службы, их должностные лица;</li>
        <li>иной участник налоговых правоотношений.</li>
      </ul>
      <h1>Статья&nbsp;&nbsp;&nbsp; 158.&nbsp;&nbsp;&nbsp; Общие&nbsp;&nbsp;&nbsp; принципы&nbsp;&nbsp; привлечения&nbsp;&nbsp;&nbsp; к&nbsp;&nbsp;&nbsp; ответственности&nbsp;&nbsp;&nbsp; за совершение налогового правонарушения</h1>
      <ol>
        <li>Никто не может быть привлечен к ответственности за совершение налогового правонарушения иначе, как по основаниям и в порядке, предусмотренным настоящим Кодексом и законодательством Кыргызской Республики.</li>
        <li>Никто не может быть привлечен повторно к ответственности за совершение одного и того же налогового правонарушения.</li>
        <li>Привлечение участника налоговых правоотношений к ответственности за совершение налогового правонарушения не освобождает налогоплательщика и его должностных лиц от ответственности, предусмотренной настоящим Кодексом, законодательством о правонарушениях и уголовным законодательством Кыргызской Республики, при наличии соответствующих оснований.</li>
        <li>Привлечение к ответственности за совершение налогового правонарушения не освобождает налогоплательщика от обязанности исполнить налоговое обязательство, а также уплатить причитающуюся в соответствии с настоящим Кодексом сумму пеней и налоговых санкций.</li>
        <li>Участник налоговых правоотношений признается невиновным в совершении налогового правонарушения, если:
          <ul>
            <li>его виновность не установлена в порядке, предусмотренном законодательством Кыргызской Республики;</li>
            <li>он исчислил налоговое обязательство в соответствии с письменным разъяснением уполномоченного государственного органа;</li>
            <li>он исполнил налоговое обязательство в порядке и с соблюдением процедур в соответствии с письменным разъяснением уполномоченного налогового органа;</li>
            <li>правомерность его действий по исполнению обязанностей налогоплательщика или налогового агента подтверждена актом налоговой проверки и соответствующим решением органа налоговой службы.</li>
          </ul>
        </li>
        <li>Налогоплательщик, привлекаемый к ответственности, не обязан доказывать свою невиновность в совершении налогового правонарушения.</li>
        <li>Обязанность доказать обстоятельства, свидетельствующие о факте налогового правонарушения и виновности налогоплательщика в его совершении, возлагается на органы налоговой службы.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 159. Давность привлечения к ответственности за совершение налогового правонарушения</h1>
      <ol>
        <li>Субъект не может быть привлечен к ответственности за совершение налогового правонарушения, если со дня его совершения истекли сроки исковой давности и ему не было вручено соответствующее решение органа налоговой службы.</li>
        <li>В случае совершения налогового правонарушения, связанного с занижением суммы налога или завышением суммы превышения по НДС, указанной в налоговом отчете, исчисление срока давности начинается со дня вручения соответствующего решения органа налоговой службы.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 160.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Налоговая&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; санкция&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; за&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; совершение&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; налогового правонарушения</h1>
      <ol>
        <li>Налоговая санкция является мерой ответственности за совершение налогового правонарушения.</li>
        <li>Налоговая санкция устанавливается и применяется в виде денежных взысканий в размере, предусмотренном настоящим Кодексом.</li>
        <li>При совершении одним субъектом двух или более налоговых правонарушений налоговые санкции, предусмотренные настоящим Кодексом, взыскиваются за каждое правонарушение в отдельности, без поглощения менее строгой санкции более строгой.</li>
        <li>Решение о применении налоговой санкции принимается органом налоговой службы и вручается налогоплательщику в порядке, установленном настоящим Кодексом.</li>
        <li>В случае возникновения обстоятельств непреодолимой силы налоговая санкция за совершение налогового правонарушения не применяется по решению Кабинета Министров.</li>
      </ol>
      <h1>Статья 161. Давность взыскания налоговой санкции</h1>
      <ol>
        <li>Органы налоговой службы могут обратиться в суд с иском о взыскании налоговой санкции не позднее 6 лет, следующих за днем вручения налогоплательщику решения о привлечении к ответственности за налоговое правонарушение.</li>
        <li>В случае отказа в возбуждении или прекращения уголовного дела, но при наличии налогового правонарушения, срок подачи искового заявления исчисляется со дня получения органом налоговой службы постановления об отказе в возбуждении или о прекращении уголовного дела.</li>
      </ol>
      <h1>Глава 19. Виды налоговых правонарушений и ответственность за их совершение</h1>
      <p><strong>Статья 162. Уклонение от налоговой и/или учетной регистрации в налоговом органе</strong></p>
      <p>При ведении деятельности налогоплательщиком без налоговой и/или учетной регистрации в налоговом органе применяется налоговая санкция в однократном</p>
      <p>размере суммы налогов, начисленных и/или подлежащих начислению за весь период такой деятельности, но не менее 50 расчетных показателей.</p>
      <h1>Статья 163. Занижение суммы налога, непредставление налоговой отчетности и неправомерный зачет НДС</h1>
      <ol>
        <li>Если иное не установлено настоящей статьей и по результатам выездной проверки органом налоговой службы устанавливается, что сумма налога, указанная в налоговой отчетности, занижена по сравнению с суммой налога, которая должна была быть указана в налоговой отчетности:
          <ul>
            <li>при занижении суммы налога в размере до 10 процентов к сумме налога, которая должна была быть указана в налоговой отчетности соответствующего налогового периода, - к налогоплательщику налоговая санкция не применяется;</li>
            <li>при занижении суммы налога в размере от 10 до 50 процентов к сумме налога, которая должна была быть указана в налоговой отчетности соответствующего налогового периода, - к налогоплательщику применяется налоговая санкция в размере 50 процентов от суммы занижения налога;</li>
            <li>при занижении суммы налога в размере свыше 50 процентов к сумме налога, которая должна была быть указана в налоговой отчетности соответствующего налогового периода, - к налогоплательщику применяется налоговая санкция в размере 100 процентов от суммы занижения налога.</li>
          </ul>
        </li>
        <li>Если по результатам выездной проверки органом налоговой службы устанавливается, что налогоплательщик не представил налоговую отчетность за определенный налоговый период, вся сумма налогового обязательства, которая подлежала отражению в данной налоговой отчетности, взыскивается в бюджет и к данному налогоплательщику применяется налоговая санкция в размере 100 процентов от суммы выявленного налогового обязательства.</li>
        <li>Если по результатам выездной проверки органом налоговой службы устанавливается, что налогоплательщик воспользовался правом на зачет суммы НДС, уплаченной или подлежащей уплате за приобретенные материальные ресурсы по недействительным счетам-фактурам, к данному налогоплательщику применяется налоговая санкция в размере 100 процентов от суммы НДС, принятой к зачету.</li>
      </ol>
      <h1>Статья 164. Невыполнение обязанности по уплате налогов налоговым агентом</h1>
      <ol>
        <li>При неуплате или неполной уплате суммы налога, удержанного и подлежащего уплате, к налоговому агенту применяется налоговая санкция в размере 10 процентов от неуплаченной суммы налога, подлежащей уплате, и/или доплате за каждый полный или неполный месяц со дня, установленного для его уплаты, но не более 50 процентов указанной суммы.</li>
        <li>По представленной уточненной отчетности налоговая санкция применяется только на сумму неуплаченного налогового обязательства, образовавшегося по данной отчетности.</li>
      </ol>
      <h1>Статья 165. Ответственность должностного лица органа налоговой службы</h1>
      <ol>
        <li>Должностное лицо органа налоговой службы, виновное в нарушении налогового законодательства Кыргызской Республики, несет ответственность в соответствии с законодательством Кыргызской Республики.</li>
        <li>Должностное лицо органа налоговой службы, совершившее противоправные действия и/или бездействие, не вправе занимать какую-либо должность в органах налоговой службы после установления его вины в судебном порядке.</li>
        <li>Убытки, причиненные налогоплательщику в результате неправомерных действий и/или бездействия органа налоговой службы либо его должностных лиц, нарушивших права налогоплательщика, а также вследствие ненадлежащего осуществления этим органом налоговой службы либо его должностными лицами предусмотренных настоящим Кодексом обязанностей по отношению к налогоплательщику, подлежат возмещению этими должностными лицами и органами налоговой службы.</li>
      </ol>
        </AccordionDetails>
    </Accordion>
   
  );
}

export default Chapter5;