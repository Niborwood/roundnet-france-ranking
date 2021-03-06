import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

// MATERIAL ICONS
import EqualizerIcon from '@mui/icons-material/Equalizer';

// IMAGES IMPORTS
import roundnetMasonry1 from '../../assets/images/ranking-masonry/roundnet-france-ranking1.jpg';
import roundnetMasonry3 from '../../assets/images/ranking-masonry/roundnet-france-ranking3.jpg';
import roundnetMasonry4 from '../../assets/images/ranking-masonry/roundnet-france-ranking4.jpg';
import roundnetMasonry6 from '../../assets/images/ranking-masonry/roundnet-france-ranking6.jpg';

function TablePaginationActions(props) {
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onPageChange,
  } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Ranking() {
  const rows = [
    {
      id: 1, player: 'Louis Jouve', points: 870,
    },
    {
      id: 2, player: 'Thomas Jouve', points: 802,
    },
    {
      id: 3, player: 'Charles Mordacq', points: 610,
    },
    {
      id: 4, player: 'Dorian Am??ziane', points: 580,
    },
    {
      id: 5, player: 'Benoit Nguyen', points: 469,
    },
    {
      id: 6, player: 'Erwan Chapeli??re', points: 430,
    },
    {
      id: 7, player: 'Beno??t Durand', points: 369,
    },
    {
      id: 8, player: 'Robin Florinda', points: 286,
    },
    {
      id: 9, player: 'Juliette Dufourcq', points: 278,
    },
    {
      id: 10, player: 'Robin Souriau', points: 274,
    },
    {
      id: 11, player: 'Ryan Danekas', points: 258,
    },
    {
      id: 12, player: 'Alexandre Marti', points: 223,
    },
    {
      id: 13, player: 'Ana??s Duport', points: 218,
    },
    {
      id: 14, player: 'Cebastien Page', points: 210,
    },
    {
      id: 15, player: 'Nicolas Brun', points: 205,
    },
    {
      id: 16, player: 'Tristan Olin', points: 205,
    },
    {
      id: 17, player: 'Lancelot Touz??', points: 176,
    },
    {
      id: 18, player: 'Ignacio Pita Vaca', points: 175,
    },
    {
      id: 19, player: 'Gabriel Rodriguez', points: 174,
    },
    {
      id: 20, player: 'Jan-Peter Geringer', points: 169,
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemData = [
    {
      img: roundnetMasonry1,
      title: 'Fern',
    },
    // {
    //   img: roundnetMasonry2,
    //   title: 'Snacks',
    // },
    {
      img: roundnetMasonry3,
      title: 'Mushrooms',
    },
    {
      img: roundnetMasonry4,
      title: 'Tower',
    },
    // {
    //   img: roundnetMasonry5,
    //   title: 'Sea star',
    // },
    {
      img: roundnetMasonry6,
      title: 'Honey',
    },
  ];

  return (
    <Container id="ranking" maxWidth="lg" sx={{ position: 'relative', mb: 8 }}>

      <Typography
        variant="h4"
        align="center"
        color="primary"
        mt={8}
      >
        <Box textAlign="center">
          <EqualizerIcon color="primary" sx={{ fontSize: 80 }} />
        </Box>
        Le classement
      </Typography>
      <Typography variant="subtitle1" align="center" color="secondary" mb={8}>
        Derni??re mise ?? jour :
        {' '}
        {new Date().toLocaleDateString()}
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
        <TableContainer component={Paper} variant="outlined" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Rang</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Joueur.se</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="right">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow
                  key={row.player}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { background: '#c5cef0' } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id }
                  </TableCell>
                  <TableCell>{row.player}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="right">{row.points}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, { label: 'Tous', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'r??sultats par page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Masonry columns={2} spacing={1}>
            {itemData.map((item) => (
              <MasonryItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                />
              </MasonryItem>
            ))}
          </Masonry>
        </Box>
      </Stack>
    </Container>
  );
}

export default Ranking;
