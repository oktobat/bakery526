import React from 'react';
import Title from '@/components/common/Title'
import BoardListSection from '@/components/board/BoardListSection'

const BoardListView = () => {
  return (
    <div className="row">
      <Title title="공지사항" />
      <BoardListSection />
    </div>
  );
};

export default BoardListView;