import { Skeleton, Table } from '@radix-ui/themes'

export const SkeletonRow = ({ cellCount }: { cellCount: number }) => {
  return (
    <Table.Row>
      {new Array(cellCount).fill(cellCount).map((value, index) => (
        <Table.Cell key={index}>
          <Skeleton />
        </Table.Cell>
      ))}
    </Table.Row>
  )
}
