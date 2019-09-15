import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Text } from 'grommet'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from '..'
import README from '../README.md'

const columns = [
  {
    property: 'name',
    align: 'start',
    label: 'Name',
    dataScope: 'col',
  },
  {
    property: 'email',
    align: 'start',
    label: 'Email',
    dataScope: 'col',
  },
  {
    property: 'amount',
    align: 'start',
    label: 'Amount',
    dataScope: 'col',
  },
]

const data = [
  {
    id: 1,
    name: 'Eric',
    email: 'eric@gmail.com',
    amount: '$45',
  },
  {
    id: 2,
    name: 'Chris',
    email: 'chris@gmail.com',
    amount: '$45',
  },
  {
    id: 3,
    name: 'Shanna',
    email: 'shanna@gmail.com',
    amount: '$45',
  },
]

storiesOf('Table', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => <DefaultTable />)
const DefaultTable = () => (
  <Container theme={grommet}>
    <Box align="center" pad="large">
      <Table caption="Default Table">
        <TableHeader>
          <TableRow>
            {columns.map(c => (
              <TableCell key={c.property} scope="col" align={c.align}>
                <Text>{c.label}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(datum => (
            <TableRow key={datum.id}>
              {columns.map(c => (
                <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                  <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {columns.map(c => (
              <TableCell key={c.property} align={c.align}>
                <Text>{c.footer}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </Box>
  </Container>
)
