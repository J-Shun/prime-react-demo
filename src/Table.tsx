/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import memberData, { Member } from './data/memberData';

function KeywordTags({ tags }: { tags: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.25rem',
      }}
    >
      {tags.map((tag, index) => (
        <div
          style={{
            color: '#fff',
            backgroundColor: '#fa0',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
          }}
          key={index}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

function Table() {
  const [members, setMembers] = useState<Member[]>([]);

  const showTags = (rowData: Member) => {
    const { keywordTag } = rowData;
    return <KeywordTags tags={keywordTag} />;
  };

  useEffect(() => {
    setMembers(memberData);
  }, []);

  return (
    <div
      style={{
        border: '1px solid #464646',
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <DataTable
        value={members}
        tableStyle={{ minWidth: '50rem', borderBottom: '1px solid #000' }}
        paginator
        rowsPerPageOptions={[3, 5, 10]}
        rows={1}
        totalRecords={members.length}
      >
        <Column field='memberId' header='會員編號' />
        <Column field='name' header='姓名' />
        <Column field='gender' header='性別' />
        <Column field='memberLevel' header='會員等級' sortable />
        <Column field='shopLocation' header='入會門店' sortable />
        <Column field='email' header='信箱' />
        <Column field='keywordTag' header='關鍵字標籤' body={showTags} />
      </DataTable>
    </div>
  );
}

export default Table;
