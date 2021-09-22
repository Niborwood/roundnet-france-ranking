import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useQuery, gql } from '@apollo/client';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// MUI TABLE IMPORTS
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
  // Adding data for the table from the GraphQL API
  const RANKING_QUERY = gql`
    {
      ranking {
        playerId
        rank
        points
        player {
          name
          surname
        }
      }
    }
  `;
  const { data, loading } = useQuery(RANKING_QUERY);
  const rankingList = data?.ranking;

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rankingList.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rankingList.length) : 0;

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
    {
      img: roundnetMasonry3,
      title: 'Mushrooms',
    },
    {
      img: roundnetMasonry4,
      title: 'Tower',
    },
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
        Dernière mise à jour :
        {' '}
        {new Date().toLocaleDateString()}
      </Typography>

      {/* TABLE */}
      {loading ? <p>Loading</p>
        : (
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
                    ? rankingList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rankingList
                  ).map((row) => (
                    <TableRow
                      key={row.playerId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { background: '#c5cef0' } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.rank}
                      </TableCell>
                      <TableCell>
                        {row.player.name}
                        {' '}
                        {row.player.surname}
                      </TableCell>
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
                      count={rankingList.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          'aria-label': 'résultats par page',
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
        )}

    </Container>
  );
}

export default Ranking;
