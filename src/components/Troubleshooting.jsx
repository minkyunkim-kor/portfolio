import React from 'react';
import { data } from '../data';

const Troubleshooting = () => {
  return (
    <section className="section troubleshooting">
      <h2 className="section-title">Troubleshooting & Architecture</h2>
      <div className="trouble-grid">
        {data.troubleshooting.map((item, index) => (
          <div key={index} className="trouble-card card">
            <h3>{item.title}</h3>
            <div className="trouble-desc">
              <p><strong>문제 상황:</strong> {item.problem}</p>
              <p><strong>해결 방안:</strong> {item.solution}</p>
              <p><strong>결과:</strong> {item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Troubleshooting;
