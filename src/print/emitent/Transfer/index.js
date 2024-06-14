import React from 'react';
import MDTypography from "components/MDTypography";
import ReestrData from 'print/ReestrData';

const TransactionDetails = React.forwardRef((props, ref) => {
    const { data , emitentData } = props;
    console.log(data,'data')
    const {
        quantity,
        amount,
        contract_date,
        operation,
        emission,
        holder_from,
        holder_to
    } = data;

    return (
        <>
      
        <div ref={ref} className="transaction-details" style={{border:'2px solid black',padding:'5px',margin:'10px'}}>
              
         
                <h3 style={{textAlign:'center'}}>Передаточное распоряжение</h3>


                <h4 style={{textAlign:'center'}}>Лицо передающее ценные бумаги</h4>
                {holder_from ? (
            <div>
                        <MDTypography variant="subtitle2">
                            Ф.И.О зарегестрированного лица.:  
                            <strong> {holder_from.name}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Лицевой счет:
                            <strong> {holder_from.id}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Документ серии:  
                            <strong> {holder_from.passport_type}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Номер:  
                            <strong> {holder_from.passport_number}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Выдан:  
                            <strong> {holder_from.passport_agency}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Адрес:  
                            <strong> {holder_from.actual_address}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Отношение к акциям:  
                            <strong> </strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Телефон, факс:  
                            <strong> {holder_from.phone_number}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            ИНН:  
                            <strong> {holder_from.inn}</strong>
                        </MDTypography>   
            </div>
                ) : emitentData ? (
                    <div>
                    <MDTypography variant="body2" color="text.secondary">
                            Ф.И.О: {emitentData.full_name}
                          </MDTypography>
                          <MDTypography variant="body2" color="text.secondary">
                            Лицевой счет: {emitentData.id}
                          </MDTypography>
                          <MDTypography variant="body2" color="text.secondary">
                            Адрес: {emitentData.legal_address}
                          </MDTypography>
                          <MDTypography variant="body2" color="text.secondary">
                            Телефон, факс: {emitentData.phone_number}
                          </MDTypography>
        </div>
                ) : (
                    <MDTypography variant="subtitle2">
                   Пусто
                </MDTypography> 
                )}
            <h4 style={{textAlign:'center'}}>Лицо приобретающее ценные бумаги</h4>
            {holder_to && (
            <div>
                        <MDTypography variant="subtitle2">
                            Ф.И.О зарегестрированного лица.:  
                            <strong> {holder_to.name}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Лицевой счет:
                            <strong> {holder_to.id}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Документ серии:  
                            <strong> {holder_to.passport_type}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Номер:  
                            <strong> {holder_to.passport_number}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Выдан:  
                            <strong> {holder_to.passport_agency}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Адрес:  
                            <strong> {holder_to.actual_address}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Отношение к акциям:  
        
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Телефон, факс:  
                            <strong> {holder_to.phone_number}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            ИНН:  
                            <strong> {holder_to.inn}</strong>
                        </MDTypography>
            </div>
            )}
            <h4 style={{textAlign:'center'}}>Передаваемые ценные бумаги</h4>
            {emission && emitentData && (
            <div>
            
                        <MDTypography variant="subtitle2">
                            Эмитент
                            <strong> {emitentData.full_name}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                           Вид ценных бумаг
                       
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Эмиссия
                            <strong> {emission.reg_number}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Операция 
                            <strong> {operation.name}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                           Количество
                            <strong> {quantity}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Сумма сделки
                            <strong> {amount}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                            Дата сделки
                            <strong> {new Date(contract_date).toLocaleDateString()}</strong>
                        </MDTypography>
                        <MDTypography variant="subtitle2">
                           Основание перехода прав собственности
                      
                        </MDTypography>
                    
            </div>
            )}
            <ReestrData/>

      
        </div>
    

    </>
    );
});

export default TransactionDetails;
