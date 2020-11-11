import React from 'react';
import cn from 'classnames';
import { MdClose, MdCheck } from 'react-icons/md';
import {
  container,
  header,
  title,
  plan as planStyle,
  content,
  buttonStyle,
  planKind,
  featureStyle,
  featureName,
  iconStyle,
} from './Plan.module.scss';

export default function Plan({ plan, i }) {
  return (
    <div className={container} style={{ zIndex: i === 1 ? 500 : 0 }}>
      <div className={header}>
        <p className={cn(`text-${plan.color}`, title)}>{plan.amount}</p>

        <p className={planStyle}>{plan.plan}</p>
      </div>

      <div className={cn(`bg-${plan.bgColor}`, content)}>
        <p className={planKind}>{plan.kind}</p>

        <ul>
          {plan.features.map((feature) => (
            <li key={feature.id} className={featureStyle}>
              {feature.included ? (
                <MdCheck className={iconStyle} />
              ) : (
                <MdClose className={iconStyle} />
              )}
              <span className={featureName}>{feature.name}</span>
            </li>
          ))}
        </ul>

        <button className={cn(`text-${plan.color}`, buttonStyle)} type="button">
          Quero esse
        </button>
      </div>
    </div>
  );
}
