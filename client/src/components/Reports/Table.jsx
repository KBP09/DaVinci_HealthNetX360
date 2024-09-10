import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

const DiseaseTable = ({ dataset }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: { xs: 200, sm: 400 } }} aria-label="disease table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Disease</TableCell>
            <TableCell align="center">Probability&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row) => (
            <TableRow
              key={row.disease}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#f5f5f5' } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.disease}
              </TableCell>
              <TableCell align="center">
                {(row.probability * 100).toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// PropTypes for validation
DiseaseTable.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      disease: PropTypes.string.isRequired,
      probability: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Default dataset in case no dataset is passed
DiseaseTable.defaultProps = {
  dataset: [
    { disease: 'Flu', probability: 0.15 },
    { disease: 'COVID-19', probability: 0.30 },
    { disease: 'Cold', probability: 0.25 },
    { disease: 'Allergy', probability: 0.20 },
    { disease: 'Other', probability: 0.10 },
  ],
};

export default DiseaseTable;
