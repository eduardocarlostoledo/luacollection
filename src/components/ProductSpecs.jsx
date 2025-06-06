
// ProductSpecs.jsx
import React from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/react";

export function ProductSpecs({ specifications }) {
  return (
    <Table aria-label="Product specifications">
      <TableHeader>
        <TableColumn>SPECIFICATION</TableColumn>
        <TableColumn>DETAIL</TableColumn>
      </TableHeader>
      <TableBody>
        {Object.entries(specifications).map(([key, val]) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{key}</TableCell>
            <TableCell>{val}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
