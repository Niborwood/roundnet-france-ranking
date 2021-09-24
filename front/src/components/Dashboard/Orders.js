import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {
    id, date, name, shipTo, paymentMethod, amount,
  };
}

const rows = [
  createData(
    0,
    '16 Mar, 2021',
    'Roundnet Lyon',
    'Lyon',
    'NON',
    64,
  ),
  createData(
    1,
    '18 Mar, 2020',
    'Roundnet Montpellier',
    'Montpellier',
    'OUI',
    16,
  ),
  createData(2, '16 Dec, 2019', 'Titans Roundnet', 'Nantes', 'OUI', 32),
  createData(
    3,
    '23 Sept, 2019',
    'Roundnet Toulouse',
    'Toulouse',
    'OUI',
    32,
  ),
  createData(
    4,
    '17 Aou, 2019',
    'Roundnet Paris',
    'Paris',
    'OUI',
    128,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <Title>Tournois récents</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Organisateur</TableCell>
            <TableCell>Lieu</TableCell>
            <TableCell>Validé</TableCell>
            <TableCell align="right">Participants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="/rf-dashboard" onClick={preventDefault} sx={{ mt: 3 }}>
        Voir plus de tournois
      </Link>
    </>
  );
}
