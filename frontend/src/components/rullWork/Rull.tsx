import React from 'react';
import './Rull.css';
function Rull(): JSX.Element {
  return (
    <div className="borderRull" style={{ marginTop: 0 }}>
      <div
        style={{
          fontSize: '60px',
          margin: '0 0 100px 0',
          fontWeight: '800',
        }}
      >
        Как мы работаем
      </div>
      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter" style={{ fontSize: '40px' }}>
            1
          </div>
          <img src="client.svg" className="imgStep" />
          <div
            className="step-name"
            style={{ fontSize: '30px', color: '#b1fbe2', fontWeight: '900' }}
          >
            Забираем
          </div>
          <div className="step-name" style={{ width: '200px' }}>
            Бесплатная доставка по городу Согласовываем с вами все работы после
            осмотра изделий технологом
          </div>
        </div>
        <div className="stepper-item completed" style={{ display: 'flex' }}>
          <div className="step-counter" style={{ fontSize: '40px' }}>
            2
          </div>
          <img src="brush.svg" className="imgStep" />
          <div
            className="step-name"
            style={{ fontSize: '30px', color: '#b1fbe2', fontWeight: '900' }}
          >
            Восстанавливаем
          </div>
          <div className="step-name" style={{ width: '200px' }}>
            Оплачиваете согласованные работы и мы приступаем к их выполнению,
            пока вы занимаетесь своими делами
          </div>
        </div>
        <div className="stepper-item">
          <div className="step-counter" style={{ fontSize: '40px' }}>
            3
          </div>
          <img src="delevery.svg" className="imgStep" />
          <div
            className="step-name"
            style={{ fontSize: '30px', color: '#b1fbe2', fontWeight: '900' }}
          >
            Привозим
          </div>
          <div className="step-name" style={{ width: '200px' }}>
            Отправляем фото результата перед отправкой готового заказа и
            доставляем обратно
          </div>
        </div>
        <div className="stepper-item">
          <div className="step-counter" style={{ fontSize: '40px' }}>
            4
          </div>
          <img src="application.svg" className="imgStep" />
          <div
            className="step-name"
            style={{ fontSize: '30px', color: '#b1fbe2', fontWeight: '900' }}
          >
            Гарантия
          </div>
          <div className="step-name" style={{ width: '200px' }}>
            Оказываем постоянную online поддержку и не бросаем вас даже после
            выполненных работ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rull;
