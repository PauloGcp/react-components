import { useState, useRef, useEffect, useLayoutEffect } from "react"
import { Calendar } from "react-multi-date-picker"
import './App.css'

export default function Example() {
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)
  const calendarRef = useRef()
  const values = [];
  const year = 2024; // Ano bissexto
  for (let day = 1; day <= 28; day++) {
      values.push(new Date(year, 1, day));
  }
 
  return (
    <div>
    <Calendar 
      ref={calendarRef}
      multiple
      hideYear={true}
      mapDays={({date}) => {
        const calendarDay = new Date(`${date.month} ${date.day}, ${date.year}`)
        const daysDifference = Math.floor((calendarDay - new Date()) / (1000 * 60 * 60 * 24))
        let props = {}
        if(daysDifference < 0) {
          props.style = {backgroundColor: 'white'}
        } else if (daysDifference <= 4) {
          props.style = {backgroundColor: 'red'};
        } else if (daysDifference <= 7) {
          props.style = {backgroundColor: 'blue'};
        } else if (daysDifference <= 9) {
          props.style = {backgroundColor: 'green'};
        } else {
          props.style = {backgroundColor: 'black'};
        }
        return props
      }}
      months={[
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
          ]}
      weekDays={[
             "Dom",
             "Seg",
             "Ter",
             "Qua",
             "Qui",
             "Sex",
             "Sab"
           ]}
      value={values}
      className='teste'
      readOnly
    />
    </div>
  )
}