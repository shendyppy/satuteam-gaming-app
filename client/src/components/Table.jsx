import { Table } from 'antd';
import { formatPrice } from '../helpers/getRupiah';

const NewTable = ({ game }) => {
    console.log(game, 'ini apa')
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        style: { color: 'inherit' },
        sorter: (a, b) => a.name.length - b.name.length,
        render: (game) => (
            <p
                style={{
                    color: "#171a21",
                    maxWidth: "400px",
                    fontSize: 22,
                }}
            >
                {game}
            </p>
        )
      },
      {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
        render: (game) => (
            <>
                {game === 0 ? (
                    <p
                        style={{
                            color: "#171a21",
                            fontSize: 22,
                        }}
                    >
                        Free to Play
                    </p>
                ) : (
                    <p
                        style={{
                            color: "#171a21",
                            fontSize: 22,
                        }}
                    >
                        {formatPrice(Number(game))}
                    </p>
                )}
            </>
        )
      },
    ]
    
    return (
        <>
            <Table dataSource={game} columns={columns} pagination={false} />
        </>
    )
}

export default NewTable;
