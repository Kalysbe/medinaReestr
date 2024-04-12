import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Chapter10() {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
              РАЗДЕЛ X. АКЦИЗНЫЙ НАЛОГ
        </AccordionSummary>
        <AccordionDetails>
        <p><strong>Глава 41. Общие положения Статья 331. Налогоплательщик акцизного налога</strong></p>
      <ol>
        <li>Налогоплательщиком акцизного налога (далее в настоящем разделе - акциз) является субъект, который производит, в том числе на давальческой основе, подакцизные товары на территории Кыргызской Республики и/или импортирует подакцизные товары на территорию Кыргызской Республики, если иное не предусмотрено настоящим разделом настоящего Кодекса.</li>
        <li>В случае освобождения субъектов, указанных в части 1 настоящей статьи, от уплаты акцизного налога в части производства подакцизных товаров на давальческой основе, налогоплательщиком акцизного налога является владелец давальческого сырья.</li>
      </ol>
      <h1>Статья 332. Особенности определения налогоплательщиков акцизного налога при импорте товаров</h1>
      <p>Определение налогоплательщиков акцизного налога при импорте подакцизных товаров в ЕАЭС осуществляется по правилам, установленным настоящим Кодексом в отношении субъектов, осуществляющих облагаемый импорт из государств-членов ЕАЭС согласно разделу IX настоящего Кодекса.</p>
      <h1>Статья 333. Объект налогообложения</h1>
      <p>Объектом налогообложения акциза являются производство на территории Кыргызской Республики и/или импорт на территорию Кыргызской Республики подакцизных товаров, предусмотренных частью 1 статьи 334 настоящего Кодекса.</p>
      <h1>Статья 334. Перечень подакцизных товаров</h1>
      <ol>
        <li>Подакцизными товарами являются:</li>
      </ol>
      <ul>
        <li>спирт этиловый неденатурированный с концентрацией спирта 80 процентов или более, этиловый спирт и прочие спиртовые настойки, денатурированные, любой концентрации, классифицируемые в товарной позиции ТН ВЭД 2207;</li>
        <li>пиво солодовое, вина виноградные натуральные, включая крепленые; сусло виноградное, кроме указанного в товарной позиции ТН ВЭД 2009, вермуты и виноградные натуральные вина прочие с добавлением растительных или ароматических веществ, напитки прочие сброженные (например, сидр, перри или сидр грушевый, напиток медовый); смеси из сброженных напитков и смеси сброженных напитков и безалкогольных напитков, слабоалкогольных напитков, в другом месте не поименованные или не включенные, спирт этиловый неденатурированный с концентрацией спирта менее 80 об.%; спиртовые настойки, ликеры и прочие спиртные напитки, классифицируемые в товарных позициях ТН ВЭД 2203, 2204, 2205, 2206, 2208;</li>
        <li>воды, включая минеральные и газированные, содержащие добавки сахара или других подслащивающих, или вкусо-ароматических веществ, классифицируемые ТН ВЭД в товарной позиции 2202;</li>
        <li>табачные изделия, такие как сигары, сигары с обрезанными концами, сигариллы (тонкие сигары) и сигареты из табака или его заменителей, классифицируемые в товарной позиции ТН ВЭД 2402;</li>
        <li>прочие изделия, содержащие табак, такие как прочий промышленно изготовленный табак и промышленные заменители табака; табак "гомогенизированный" или "восстановленный"; табачные экстракты и эссенции, классифицируемые в товарной позиции ТН ВЭД 2403;</li>
        <li>нагреваемый табак и изделия с нагреваемым табаком, классифицируемые в товарной позиции ТН ВЭД 2404;</li>
        <li>никотиносодержащие жидкости для использования в электронных сигаретах, одноразовые электронные системы доставки никотина с никотиновой жидкостью в одном корпусе, классифицируемые в товарной позиции ТН ВЭД 2404;</li>
        <li>сигареты электронные и аналогичные индивидуальные электрические испарительные устройства (электронные системы доставки никотина), классифицируемые в товарной подсубпозиции ТН ВЭД 8543 40 000 0;</li>
        <li>нефть сырая и нефтепродукты сырые, полученные из битуминозных пород, нефть и нефтепродукты, полученные из битуминозных пород, кроме сырых; продукты, в другом месте не поименованные или не включенные, содержащие 70 мас.% или более нефти или нефтепродуктов, полученных из битуминозных пород, причем эти нефтепродукты являются основными составляющими продуктов; отработанные нефтепродукты, классифицируемые в товарных позициях ТН ВЭД 2707, 2709, 2710, 3811.</li>
        <li>сжиженный углеводородный газ (СУГ), используемый в качестве автомобильного топлива, классифицируемые в товарных позициях ТН ВЭД 2711 11 0000-2711 19 0000.</li>
      </ul>
      <ol start="2">
        <li>Товары, указанные в настоящей статье, могут быть обозначены средством идентификации или маркой акцизного сбора.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 335. Налоговая база</h1>
      <ol>
        <li>Налоговой базой по акцизу являются:
          <ul>
            <li>физический объем&nbsp;&nbsp;&nbsp; подакцизного&nbsp;&nbsp; товара,&nbsp;&nbsp;&nbsp; подлежащего&nbsp;&nbsp;&nbsp; обозначению средством идентификации или маркой акцизного сбора; и/или</li>
            <li>физический объем реализованного подакцизного товара, не подлежащего обозначению средством идентификации или маркой акцизного сбора; и/или</li>
            <li>физический объем импортированного подакцизного товара, не подлежащего обозначению средством идентификации или маркой акцизного сбора; и/или.</li>
          </ul>
        </li>
      </ol>
      <p>Для целей настоящей части под реализованным подакцизным товаром понимается подакцизный товар, по которому право собственности перешло покупателю.</p>
      <ul>
        <li>физический объем подакцизного товара, произведенного на территории Кыргызской Республики из сырья на давальческой основе.</li>
      </ul>
      <ol start="2">
        <li>Нормы настоящей статьи применяются независимо от того, произведен ли товар из собственного или давальческого сырья.</li>
        <li>Корректировка размера налоговой базы при импорте подакцизных товаров из государств-членов ЕАЭС производится в соответствии со статьей 321 настоящего Кодекса.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 336. Базовые ставки акциза</h1>
      <ol>
        <li>Базовые ставки акциза устанавливаются в следующих размерах:</li>
      </ol>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p><strong>Подакцизные товары</strong></p>
            </td>
            <td width="135">
              <p><strong>Код ТН ВЭД</strong></p>
            </td>
            <td width="123">
              <p><strong>Единица измерения (налоговая база)</strong></p>
            </td>
            <td width="111">
              <p><strong>Базовые ставки</strong></p>
              <p><strong>налога</strong></p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Спирт&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; этиловый неденатурированный, этиловый&nbsp;&nbsp;&nbsp; спирт&nbsp;&nbsp;&nbsp; и&nbsp;&nbsp;&nbsp; прочие спиртовые&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; настойки, денатурированные,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; любой концентрации,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; кроме отпускаемого товаропроизводителям&nbsp;&nbsp;&nbsp;&nbsp; или импортируемого товаропроизводителями для выработки&nbsp;&nbsp;&nbsp; водки,&nbsp;&nbsp;&nbsp; ликеро- водочных&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; изделий,</p>
              <p>крепленых&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; напитков, крепленых соков, бальзама, вина, при наличии у них лицензии на право их производства,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и</p>
              <p>спецпотребителям&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; в пределах норм</p>
            </td>
            <td width="135">
              <p>2207</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>350</p>
              <p>сомов</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p>Водка</p>
            </td>
            <td width="135">
              <p>220860</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>300</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Ликеро-водочные изделия</p>
            </td>
            <td width="135">
              <p>220830;</p>
              <p>220870; 220890</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>300</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Крепленые&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; напитки, крепленые соки и бальзамы</p>
            </td>
            <td width="135">
              <p>220840;</p>
              <p>220850</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>300</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Вина</p>
            </td>
            <td width="135">
              <p>2204, кроме</p>
              <p>220410&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и</p>
              <p>220430,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2205,</p>
              <p>2206</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>100</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Коньяки&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (кроме коньячного спирта)</p>
            </td>
            <td width="135">
              <p>2208201200-</p>
              <p>2208202900,</p>
              <p>2208206200-</p>
              <p>2208208900</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>200</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Вина игристые, включая вино газированное и шампанское</p>
            </td>
            <td width="135">
              <p>2204;&nbsp;&nbsp;&nbsp; 2205;</p>
              <p>2206</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>140</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Пиво&nbsp;&nbsp; расфасованное&nbsp;&nbsp; и нефасованное</p>
            </td>
            <td width="135">
              <p>2203</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>30 сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Виноматериалы</p>
            </td>
            <td width="135">
              <p>220430</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>35 сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Слабоалкогольные напитки</p>
            </td>
            <td width="135">
              <p>220890</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>200</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Воды,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; включая минеральные&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и газированные, содержащие добавки сахара или других подслащивающие, или вкусо- ароматические вещества</p>
            </td>
            <td width="135">
              <p>2202</p>
            </td>
            <td width="123">
              <p>литр</p>
            </td>
            <td width="111">
              <p>100</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Табачные изделия:</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Сигареты с фильтром, сигареты без фильтра и папиросы:</p>
              <p>с 1 января 2023 года по</p>
              <p>30 апреля 2023 года включительно</p>
              <p>с 1 мая 2023 года по 31</p>
              <p>декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
            </td>
            <td width="135">
              <p>2402</p>
            </td>
            <td width="123">
              <p>1000 штук</p>
            </td>
            <td width="111">
      
      
              <p>2250</p>
              <p>сомов</p>
              <p>2500</p>
              <p>сомов</p>
              <p>2750</p>
              <p>сомов</p>
              <p>3000</p>
              <p>сомов</p>
              <p>3250</p>
              <p>сомов</p>
              <p>3500</p>
              <p>сомов</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p>с 1 января 2026 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2027 года</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Сигариллы:</p>
              <p>с 1 января 2023 года по</p>
              <p>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; апреля&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 мая 2023 года по 31</p>
              <p>декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2026 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2027 года</p>
            </td>
            <td width="135">
              <p>2402</p>
            </td>
            <td width="123">
              <p>1000 штук</p>
            </td>
            <td width="111">
      
              <p>2250</p>
              <p>сомов</p>
              <p>2500</p>
              <p>сомов</p>
              <p>2750</p>
              <p>сомов</p>
              <p>3000</p>
              <p>сомов</p>
              <p>3250</p>
              <p>сомов</p>
              <p>3500</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Сигары:</p>
              <p>с 1 января 2023 года по</p>
              <p>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; апреля&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 мая 2023 года по 31</p>
              <p>декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2026 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2027 года</p>
            </td>
            <td width="135">
              <p>2402</p>
            </td>
            <td width="123">
              <p>1 штука</p>
            </td>
            <td width="111">
      
              <p>200</p>
              <p>сомов</p>
              <p>250</p>
              <p>сомов</p>
              <p>275</p>
              <p>сомов</p>
              <p>300</p>
              <p>сомов</p>
              <p>325</p>
              <p>сомов</p>
              <p>350</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Табак&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; трубочный, курительный, жевательный, сосательный, нюхательный, кальянный (за исключением табака, используемого в качестве&nbsp;&nbsp;&nbsp; сырья&nbsp;&nbsp;&nbsp; для</p>
            </td>
            <td width="135">
              <p>2403</p>
            </td>
            <td width="123">
              <p>килограмм</p>
            </td>
            <td width="111">
      
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p>производства&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; табачной продукции):</p>
              <p>с 1 января 2023 года по</p>
              <p>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; апреля&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 мая 2023 года по 31</p>
              <p>декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2026 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2027 года</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
              <p>800</p>
              <p>сомов</p>
              <p>2000</p>
              <p>сомов</p>
              <p>2250</p>
              <p>сомов</p>
              <p>2500</p>
              <p>сомов</p>
              <p>2750</p>
              <p>сомов</p>
              <p>3000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Изделия с нагреваемым табаком&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (нагреваемая табачная палочка (стик), нагреваемая капсула с табаком) цилиндрической формы:</p>
            </td>
            <td rowspan="3" width="135">
              <p>2404</p>
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>с 1 января 2023 года по</p>
              <p>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; апреля&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
            </td>
            <td width="123">
              <p>1000 штук</p>
            </td>
            <td width="111">
              <p>2000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>с 1 мая 2023 года по 31</p>
              <p>декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2026 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2027 года</p>
            </td>
            <td width="123">
              <p>килограмм табачной смеси</p>
            </td>
            <td width="111">
              <p>3700</p>
              <p>сомов</p>
              <p>4100</p>
              <p>сомов</p>
              <p>4500</p>
              <p>сомов</p>
              <p>4900</p>
              <p>сомов</p>
              <p>5300</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Нагреваемый&nbsp;&nbsp;&nbsp;&nbsp; табак&nbsp;&nbsp;&nbsp;&nbsp; в рассыпном виде:</p>
              <p>с 1 января 2023 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
            </td>
            <td width="135">
              <p>2404</p>
            </td>
            <td width="123">
              <p>килограмм</p>
            </td>
            <td width="111">
      
              <p>4000</p>
              <p>сомов</p>
              <p>5000</p>
              <p>сомов</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2026 года</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
              <p>6000</p>
              <p>сомов</p>
              <p>7000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Никотиносодержащая жидкость&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; в&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; картриджах, резервуарах&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; других контейнерах&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; для использования&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; в электронных сигаретах:</p>
              <p>с 1 января 2023 года по</p>
              <p>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; апреля&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 мая 2023 года по 31</p>
              <p>декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2024 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2025 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2026 года по</p>
              <p>31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; декабря&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; года включительно</p>
              <p>с 1 января 2027 года</p>
            </td>
            <td width="135">
              <p>2404</p>
            </td>
            <td width="123">
              <p>миллилитр</p>
            </td>
            <td width="111">
      
      
      
      
      
              <p>3 сома</p>
      
              <p>13 сомов</p>
      
              <p>15 сомов</p>
      
              <p>18 сомов</p>
      
              <p>20 сомов</p>
      
              <p>23 сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Одноразовые электронные&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; системы доставки&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; никотина&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; с никотиновой&nbsp;&nbsp;&nbsp; жидкостью&nbsp;&nbsp;&nbsp; в одном корпусе</p>
            </td>
            <td width="135">
              <p>2404</p>
            </td>
            <td width="123">
              <p>1 штука</p>
            </td>
            <td width="111">
              <p>100</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Сигареты электронные и аналогичные индивидуальные электрические испарительные&nbsp;&nbsp;&nbsp;&nbsp; устройства (электронные&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; системы доставки никотина)</p>
            </td>
            <td width="135">
              <p>8543 40 000</p>
              <p>0</p>
            </td>
            <td width="123">
              <p>1 штука</p>
            </td>
            <td width="111">
              <p>100</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>Нефтепродукты:</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>масла и другие продукты высокотемпературной перегонки&nbsp;&nbsp; каменноугольной смолы;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; аналогичные</p>
            </td>
            <td width="135">
              <p>2707 10 100</p>
              <p>0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>5000</p>
              <p>сомов</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p>продукты, в которых масса ароматических составных частей превышает массу неароматических: бензол для использования в качестве топлива</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>газовый&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; конденсат природный:</p>
            </td>
            <td width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>газовый&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; конденсат стабильный плотностью при 20 &ordm;С не менее 650 кг/м3, но не более 850 кг/м3 и с содержанием серы не более 1,0 мас.%, прочий</p>
            </td>
            <td width="135">
              <p>2709 00 100</p>
              <p>1; 2709 00 100 9</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>5000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>нефть&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; сырая&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и нефтепродукты&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; сырые, полученные&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; из</p>
              <p>битуминозных материалов</p>
            </td>
            <td width="135">
              <p>2709 00 900</p>
              <p>1-2709 00 900 9</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>0 сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>бензины&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; моторные, специальные,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; легкие&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и средние&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; дистилляты,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; за исключением классифицируемых&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; в товарной позиции ТН ВЭД 2710 19 290, прочие бензины и дистилляты</p>
            </td>
            <td width="135">
              <p>2710 12 110-</p>
              <p>2710&nbsp;&nbsp;&nbsp;&nbsp; 12&nbsp;&nbsp;&nbsp;&nbsp; 900;</p>
              <p>2710 19 110 0-</p>
              <p>2710 19 150 0;</p>
              <p>2710 19 250 0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>10000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>прочие нефтепродукты (биотопливо,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; топливо экологическое, смесь легких дистиллятов)</p>
            </td>
            <td width="135">
              <p>2710 20 900</p>
              <p>0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>5000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>топливо для реактивных двигателей</p>
            </td>
            <td width="135">
              <p>2710 19 210</p>
              <p>0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>2000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>дизтопливо, газойли, тяжелые&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; дистилляты,</p>
              <p>средние&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; дистилляты, классифицируемые&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; в товарной позиции ТН ВЭД 2710 19 290</p>
            </td>
            <td width="135">
              <p>2710 19 290</p>
              <p>0; 2710 19 310</p>
              <p>0-2710 19 480 0;</p>
              <p>2710 20 110 0-</p>
              <p>2710 20 190 0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>2000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>мазут</p>
            </td>
            <td width="135">
              <p>2710 19 510-</p>
              <p>2710 19 680 9;</p>
              <p>2710 20 310 1-</p>
              <p>2710 20 390 9</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>2000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>масла смазочные; масла прочие</p>
            </td>
            <td width="135">
              <p>2710 19 710</p>
              <p>0-2710 19 980 0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>2000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>прочие антидетонаторы на основе соединений свинца, используемые в тех</p>
            </td>
            <td width="135">
              <p>3811 11 900</p>
              <p>0; 3811 19 000 0</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>5000</p>
              <p>сомов</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td width="234">
              <p>же&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; целях,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; что&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; и нефтепродукты</p>
            </td>
            <td colspan="2" width="135">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>присадки к смазочным маслам, содержащие нефть или&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; нефтепродукты, полученные&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; из</p>
              <p>битуминозных пород</p>
            </td>
            <td width="97">
              <p>3811 21</p>
              <p>0</p>
            </td>
            <td width="38">
              <p>000</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>5000</p>
              <p>сомов</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>СУГ,&nbsp;&nbsp;&nbsp;&nbsp; используемый&nbsp;&nbsp;&nbsp;&nbsp; в</p>
            </td>
            <td width="97">
              <p>2711</p>
            </td>
            <td width="38">
              <p>11</p>
            </td>
            <td width="123">
              <p>тонна</p>
            </td>
            <td width="111">
              <p>3000</p>
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>качестве&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; автомобильного</p>
            </td>
            <td width="97">
              <p>0000-2711</p>
            </td>
            <td width="38">
              <p>19</p>
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
          <tr>
            <td width="234">
              <p>топлива с 1 июля 2023 года</p>
            </td>
            <td width="97">
              <p>0000</p>
            </td>
            <td width="38">
      
            </td>
            <td width="123">
      
            </td>
            <td width="111">
      
            </td>
          </tr>
        </tbody>
      </table>
      <ol start="2">
        <li>Ставка акциза может изменяться Кабинетом Министров в пределах размера установленной базовой ставки.</li>
        <li>Специальными потребителями этилового спирта являются лица, использующие этиловый спирт в медицинских, ветеринарных целях и для производства дезинфицирующих средств и парфюмерно-косметической продукции в пределах норм, утверждаемых уполномоченным налоговым органом.</li>
        <li>Перечень специальных потребителей, указанных в части 3 настоящей статьи, утверждается Кабинетом Министров.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 337. Налоговый период</h1>
      <p>Налоговым периодом акциза по производимым или импортируемым с территорий государств-членов ЕАЭС подакцизным товарам является календарный месяц.</p>
      <h1>Статья 338. Порядок исчисления</h1>
      <p>Исчисление акциза производится в соответствии с порядком, установленным частью 1 статьи 43 настоящего Кодекса.</p>
      <h1>Статья 339. Срок уплаты и представления налоговой отчетности</h1>
      <ol>
        <li>Акциз уплачивается в следующие сроки:
          <ul>
            <li>Если иное не установлено настоящим пунктом, по производимым и/или импортируемым подакцизным товарам, подлежащим обозначению средством идентификации или маркой акцизного сбора, - до приобретения кодов маркировки или марок акцизного сбора.</li>
          </ul>
        </li>
      </ol>
      <p>Средство идентификации или марка акцизного сбора предоставляются производителю и/или импортеру подакцизной продукции на сумму предоставленной банковской гарантии с отсрочкой уплаты до 40 календарных дней в порядке, определяемом Кабинетом Министров;</p>
      <p>11) по подакцизным товарам, подлежащим обозначению только средством идентификации, импортируемым с территории государства &ndash; члена ЕАЭС, при взаимном признании средств идентификации с данным государством по данному виду товара, &ndash; до ввоза товаров, обозначенных средством идентификации соответствующего государства &ndash; члена ЕАЭС на территорию Кыргызской Республики;</p>
      <ul>
        <li>по подакцизным товарам, импортируемым с территорий государств, не являющихся членами ЕАЭС, не подлежащим обозначению средством идентификации или маркой акцизного сбора, - в день, определяемый регулирующими таможенные правоотношения международными договорами и актами, составляющими право ЕАЭС, и/или законодательством Кыргызской Республики в сфере таможенного дела для уплаты таможенных платежей;</li>
        <li>по подакцизным товарам, производимым на территории Кыргызской Республики и/или импортируемым с территорий государств-членов ЕАЭС, не подлежащим обозначению средством идентификации или маркой акцизного налога, - не позднее 20 числа месяца, следующего за отчетным налоговым периодом.</li>
      </ul>
      <ol start="2">
        <li>Налогоплательщик акциза по производимым подакцизным товарам обязан ежемесячно представлять в налоговый орган по месту текущего налогового учета налоговую отчетность по акцизу не позднее 20 числа месяца, следующего за отчетным налоговым периодом.</li>
        <li>21. Налогоплательщик акциза по импортируемым подакцизным товарам с территорий государств &ndash; членов ЕАЭС обязан представлять в налоговый орган по месту текущего налогового учета налоговую отчетность по косвенным налогам не позднее 20 числа месяца, следующего за месяцем, в котором был осуществлен импорт товара.</li>
      </ol>
      <p>К налоговой отчетности по косвенным налогам должны быть приложены соответствующие документы по форме и в порядке, установленным статьей 320 настоящего Кодекса.</p>
      <ol start="3">
        <li>В случае импорта подакцизных товаров с территорий государств-членов ЕАЭС уплата акциза на импорт производится по месту налоговой регистрации налогоплательщика акциза.</li>
        <li>Подтверждение налоговыми органами факта уплаты акциза по импортированным с территорий государств-членов ЕАЭС подакцизным товарам осуществляется путем проставления соответствующей отметки органом налоговой службы в заявлении о ввозе товаров и уплате косвенных налогов.</li>
      </ol>
      <p>В случае неуплаты или неполной уплаты акциза по импортированным товарам, а также несоответствия документов, представленных налогоплательщиком, требованиям, установленным налоговым законодательством Кыргызской Республики, орган налоговой службы принимает решение о мотивированном отказе в подтверждении факта уплаты акциза на импорт.</p>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 340. Администрирование акцизного налога</h1>
      <p>Если иное не предусмотрено настоящей статьей, администрирование акциза при экспорте и импорте товаров во взаимной торговле государств-членов ЕАЭС осуществляется органами налоговой службы.</p>
      <p>Администрирование акциза по товарам, помещенным под таможенные процедуры свободной таможенной зоны или свободного склада, осуществляется таможенными органами.</p>
      <p>Глава 42. Особенности налогообложения</p>
      <h1>Статья 341. Специальные правила</h1>
      <ol>
        <li>Статья 342 настоящего Кодекса применяется в отношении подакцизного товара, произведенного из давальческого сырья и подлежащего отгрузке на экспорт.</li>
        <li>Налогоплательщик, осуществляющий производство подакцизного товара из давальческого сырья, обязан:
          <ul>
            <li>в течение 3 дней со дня заключения договора или контракта об оказании услуги по переработке давальческого сырья известить налоговый орган по месту текущего налогового учета о данной сделке, приложив копию соответствующего договора или контракта;</li>
            <li>внести на депозитный счет налогового органа по месту текущего налогового учета сумму акциза (депозита), исчисленного на объем подакцизных товаров, подлежащих производству по условиям указанного договора или контракта, до начала отгрузки готового подакцизного товара собственнику давальческого сырья и/или на экспорт по поручению собственника давальческого сырья.</li>
          </ul>
        </li>
        <li>Срок переработки давальческого сырья, являющегося подакцизным, вывезенного с территории Кыргызской Республики на территорию государства- члена ЕАЭС, а также ввезенного на территорию Кыргызской Республики с территорий государств-членов ЕАЭС, определяется согласно условиям договора (соглашения) на переработку давальческого сырья и не может превышать два года с даты принятия на учет и/или отгрузки давальческого сырья.</li>
      </ol>
      <h1>Статья 342. Особенности уплаты акциза по подакцизным товарам, произведенным из давальческого сырья</h1>
      <ol>
        <li>Сумма акциза (депозита), внесенная налогоплательщиком, осуществляющим производство подакцизного товара из давальческого сырья, на депозитный счет налогового органа, подлежит возврату на его банковский счет не позднее 20 дней со дня представления в налоговый орган соответствующего заявления, а также следующих документов:
          <ul>
            <li>налоговой отчетности по акцизу;</li>
            <li>копии договора между собственником давальческого сырья и третьим лицом на поставку подакцизного товара на экспорт;</li>
            <li>копии счета-фактуры или иного документа на отгрузку готового подакцизного товара, включая на экспорт;</li>
            <li>платежных документов, подтверждающих факт оплаты за услуги по переработке давальческого сырья;</li>
            <li>платежных документов, подтверждающих факт оплаты за экспортированный подакцизный товар;</li>
            <li>таможенной декларации на экспорт подакцизного товара;</li>
            <li>таможенной декларации&nbsp;&nbsp;&nbsp; страны&nbsp;&nbsp;&nbsp; назначения&nbsp;&nbsp;&nbsp; или&nbsp;&nbsp;&nbsp; иного&nbsp;&nbsp;&nbsp; документа, подтверждающего импорт в страну назначения, такого как:</li>
          </ul>
        </li>
      </ol>
      <p>а) тиркарнет;</p>
      <p>б) международная товарно-транспортная накладная;</p>
      <p>в)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; накладная,&nbsp;&nbsp;&nbsp;&nbsp; оформляемая&nbsp;&nbsp;&nbsp;&nbsp; при&nbsp;&nbsp;&nbsp;&nbsp; международном&nbsp;&nbsp;&nbsp;&nbsp; железнодорожном сообщении;</p>
      <ul>
        <li>справка налогового органа по месту текущего налогового учета собственника давальческого сырья об отсутствии у него налоговой задолженности.</li>
      </ul>
      <ol start="2">
        <li>Если по истечении 90 дней со дня отгрузки готового подакцизного товара собственнику давальческого сырья и/или на экспорт по поручению собственника давальческого сырья налогоплательщик, осуществивший производство подакцизного товара из давальческого сырья, не представил или представил не в полном объеме документы, указанные в части 1 настоящей статьи, сумма акциза (депозита) зачисляется в доход бюджета и возврату не подлежит.</li>
        <li>В случае неподтверждения факта экспорта подакцизного товара сумма акциза (депозита), внесенная на депозитный счет налогового органа, зачисляется в доход бюджета и возврату не подлежит.</li>
        <li>Сумма акциза (депозита), внесенная на депозитный счет, не подлежит возврату при наличии налоговой задолженности у собственника давальческого сырья в пределах такой задолженности.</li>
      </ol>
      <h1>Статья 343. Особенности уплаты акциза в отдельных случаях</h1>
      <ol>
        <li>В случае если после приобретения кодов маркировки или акцизных марок ставки акциза изменились в сторону уменьшения или увеличения, сумма акцизного налога, уплаченная при приобретении средств идентификации или марок акцизного сбора, пересчету не подлежит.</li>
        <li>Особенности уплаты акциза при экспорте подакцизных товаров за пределы территории Кыргызской Республики указаны в статье 347 настоящего Кодекса.</li>
        <li>Особенности уплаты акциза при перемещении товаров через таможенную границу ЕАЭС определяются регулирующими таможенные правоотношения международными договорами и актами, составляющими право ЕАЭС, и законодательством Кыргызской Республики в сфере таможенного дела.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 344. Вычет суммы акциза</h1>
      <ol>
        <li>Налогоплательщик акциза имеет право уменьшить сумму акциза на сумму акциза, уплаченную при приобретении на территории Кыргызской Республики или при импорте подакцизных товаров на территорию Кыргызской Республики, если указанные товары использованы в качестве основного сырья для производства подакцизных товаров.</li>
        <li>В соответствии с частью 1 настоящей статьи вычет производится на сумму акциза по фактически использованному за налоговый период количеству подакцизного сырья на производство подакцизного товара, определенную на основе норм выхода подакцизного товара из подакцизного сырья, предусмотренных в налоговой политике налогоплательщика.</li>
        <li>Нормы настоящей статьи применяются также при передаче подакцизных товаров, изготовленных из давальческого подакцизного сырья, использованного в качестве сырья, при условии подтверждения уплаты акциза собственником давальческого подакцизного сырья.</li>
      </ol>
      <h1>Статья 345. Подакцизные товары, подлежащие маркировке</h1>
      <ol>
        <li>Производимые на территории Кыргызской Республики и импортируемые на территорию Кыргызской&nbsp; Республики&nbsp; алкогольные&nbsp; напитки,&nbsp; воды,&nbsp; включая</li>
      </ol>
      <p>минеральные и газированные, содержащие добавки сахара или других подслащивающих, или вкусо-ароматических веществ, а также табачные изделия, перечень которых указан в пунктах 2, 3, 4, 6, 7 и 8 части 1 статьи 334 настоящего Кодекса, за исключением сусла виноградного (код ТН ВЭД 220430), подлежат маркировке.</p>
      <ol start="2">
        <li>Маркировкой является:
          <ul>
            <li>нанесение/прикрепление на подакцизный товар или его упаковку марки акцизного сбора утвержденного образца, подтверждающего, что акциз уплачен в доход бюджета, если иное не предусмотрено настоящим разделом; и/или</li>
            <li>создание средства идентификации путем нанесения кода маркировки непосредственно на подакцизный товар, его упаковку или этикетку, подтверждающего, что акциз уплачен в доход бюджета, с обязательной подачей сведений о создании средства идентификации в ГАИС &laquo;Маркировка товаров&raquo;, если иное не предусмотрено настоящим разделом.</li>
          </ul>
        </li>
        <li>Не подлежат маркировке алкогольные напитки и табачные изделия:
          <ul>
            <li>экспорт которых за пределы территории Кыргызской Республики осуществлен в соответствии с таможенной процедурой экспорта;</li>
            <li>импорт (пересылка) которых осуществляется физическими лицами на территорию Кыргызской Республики в пределах норм, утвержденных Кабинетом Министров.</li>
          </ul>
        </li>
        <li>Форма, срок внедрения, порядок выдачи и применения средств идентификации или марок акцизного сбора, порядок признания средств идентификации государств &ndash; членов ЕАЭС при взаимной торговле, а также порядок применения и администрирования депозитного платежа при ввозе алкогольной маркируемой продукции и размер депозитного платежа устанавливаются Кабинетом Министров.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 346. Порча, утрата подакцизных товаров и марок акцизного сбора, аннулирование кодов маркировки</h1>
      <ol>
        <li>При порче и утрате произведенных подакцизных товаров акциз уплачивается в полном размере и/или не подлежит возврату, за исключением случаев, возникших в результате непреодолимой силы.</li>
        <li>При утрате акцизных марок не подлежит возврату акциз, уплаченный до или в момент приобретения акцизных марок, за исключением случаев, возникших в результате непреодолимой силы.</li>
        <li>При порче акцизных марок акциз не уплачивается в том случае, когда испорченные марки акцизного сбора приняты уполномоченным банком на основании акта списания к уничтожению. Взамен поврежденных марок выдаются новые акцизные марки без повторной уплаты акциза, при условии оплаты номинальной стоимости марок.</li>
        <li>Исчисление акциза по утраченным акцизным маркам, предназначенным для обозначения алкогольной продукции, производится исходя из установленных ставок, применяемых к максимально допустимому объему тары, в соответствии с емкостью, указанной на марке акцизного сбора.</li>
      </ol>
      <ol start="5">
        <li>Аннулированию не подлежат коды маркировки, преобразованные в средство идентификации.</li>
        <li>Аннулирование кодов маркировки осуществляется путем подачи сведений об аннулировании в ГАИС &laquo;Маркировка товаров&raquo;.</li>
        <li>Порядок аннулирования кодов маркировки устанавливаются Кабинетом Министров.</li>
      </ol>
      <p>(В редакции Закона Кыргызской Республики от 3 апреля 2023 года № 78)</p>
      <h1>Статья 347. Освобождение от акцизов</h1>
      <ol>
        <li>Акцизами не облагаются подакцизные товары, импортируемые физическими лицами по нормам, утверждаемым Кабинетом Министров.</li>
        <li>Освобождаются от уплаты акциза следующие импортируемые товары:
          <ul>
            <li>товары, необходимые для эксплуатации транспортных средств, осуществляющих международные перевозки грузов, багажа и пассажиров, во время следования в пути и в пунктах промежуточной остановки;</li>
            <li>товары, перемещаемые через таможенную границу ЕАЭС, освобождаемые в рамках таможенных процедур, установленных таможенным законодательством ЕАЭС и/или законодательством Кыргызской Республики в сфере таможенного дела, за исключением таможенной процедуры выпуска товаров для внутреннего потребления;</li>
            <li>конфискованные, бесхозные ценности, а также ценности, перешедшие по праву наследования государству.</li>
          </ul>
        </li>
        <li>Если иное не предусмотрено настоящей статьей, экспортируемые подакцизные товары не облагаются акцизами при условии подтверждения налогоплательщиком экспорта таких товаров.</li>
      </ol>
      <p>Для подтверждения обоснованности освобождения от уплаты акцизов налогоплательщик представляет в налоговый орган по месту текущего налогового учета одновременно с налоговой отчетностью по акцизу документы, предусмотренные частью 2 статьи 303 настоящего Кодекса.</p>
      <p>При этом налогоплательщик вправе представить такие документы в налоговый орган в течение 180 календарных дней со дня отгрузки подакцизных товаров.</p>
      <p>В случае подтверждения экспорта подакцизных товаров по истечении срока, установленного настоящей частью, уплаченные суммы акцизов подлежат зачету и/или возврату в соответствии со статьей 93 настоящего Кодекса. При этом уплаченная сумма пени, начисленной в связи с неподтверждением реализации подакцизных товаров на экспорт, возврату не подлежит.</p>
      <p>В случае неподтверждения, непредставления или представления в неполном объеме документов, указанных в настоящей части, или неподтверждения их достоверности в процессе последующего налогового контроля, на такие подакцизные товары акциз исчисляется в порядке, установленном настоящим</p>
      <p>разделом для реализации подакцизных товаров на территории Кыргызской Республики.</p>
        </AccordionDetails>
    </Accordion>
   
  );
}

export default Chapter10;
