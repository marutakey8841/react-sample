import React from 'react';

// タスクカード状態用カスタムフック
const useTaskCardsState = (initialData) => {
  const [state, setState] = React.useState(initialData);

  // タスクカードを1つ追加
  const addCard = (categoryId, card) => {
    // タスクカードのカテゴリー毎に保存
    state[categoryId].push(card);
    setState([ ...state ]);
  };
  return {
    state,
    addCard,
  };
};
export default useTaskCardsState;
