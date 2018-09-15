import React from 'react';

export const date = () => ({
  year: new Date().getFullYear()
});

export const format = x => {
  const formatted = x.split('\n').map((s, i) => <span key={ i }>{ s }<br /></span>);
  // return type === 'h1' ? <h1 key={ key }>{ formatted }</h1> : <p key={ key }>{ formatted }</p>
  return formatted;
};