import Form from './Form';
import Table from './Table';
// import Test from './Test';
// primary #3857B7

function App() {
  return (
    <>
      {/* container */}
      <div style={{ padding: '3rem 5rem' }}>
        <h2 style={{ color: 'var(--primary-500)' }}>米果會員假的儀表板</h2>
        <Form />

        {/* <Test /> */}

        <Table />
      </div>
    </>
  );
}

export default App;
