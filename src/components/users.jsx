import Table from "./table";

const usersData = [
  {
    id: 1,
    name: "John",
    address: "123 Main St",
    city: "New York",
  },
  {
    id: 2,
    name: "Mark",
    address: "123 Main Street",
    city: "New Jersey",
  },
];

const rows = [
  { id: 1, displayName: "Name", value: "name" },
  { id: 2, displayName: "Address", value: "address" },
  { id: 3, displayName: "City", value: "city" },
];
const Users = ({ name }) => {
  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <h1>Users</h1>
        <span>Im {name}</span>
        <Table datas={usersData} rows={rows} />
      </div>
    </>
  );
};

export default Users;
