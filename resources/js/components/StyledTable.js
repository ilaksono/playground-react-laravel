import {Table} from 'react-bootstrap';

const StyledTable = ({data}) => {

  let parsedRows = [];
  if (data.length)
    parsedRows = data.map(each => {
      return (
        <tr key={each.id}>
          <td>
            {each.id}
          </td>
          <td>
            {each.name}
          </td>
        </tr>
      )
    })

  return (
    <div style={{
      margin: 150
    }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {parsedRows}
        </tbody>
      </Table>
    </div>
  )

}

export default StyledTable;