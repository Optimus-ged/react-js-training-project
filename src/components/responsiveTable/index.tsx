export default function ResponsiveTable() {
  return (
    <table className="w-full bg-[#323232] text-gray-400">
      <caption className="bg-black p-4 text-left">Musiques list</caption>
      <thead className="hidden lg:table-header-group sticky top-0">
        <tr className="bg-[hsla(0,0%,0%,0.5)]">
          <th className="p-4 text-left">First name</th>
          <th className="p-4 text-left">Last name</th>
          <th className="p-4 text-left">age</th>
          <th className="p-4 text-left">location</th>
          <th className="p-4 text-left">Passion</th>
          <th className="p-4 text-left">Color</th>
          <th className="p-4 text-left">degree</th>
          <th className="p-4 text-left">profession</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

function TableRow() {
  return (
    <tr className="even:bg-[hsla(0,0%,0%,0.1)]">
      <td
        data-cell="first-name"
        className="block p-4 lg:table-cell before:font-bold"
      >
        Yala
      </td>
      <td
        data-cell="last-name"
        className="block p-4 lg:table-cell"
      >
        Gedeon
      </td>
      <td data-cell="age" className="block p-4 lg:table-cell">
        10
      </td>
      <td data-cell="location" className="block p-4 lg:table-cell">
        Kigali
      </td>
      <td data-cell="passion" className="block p-4 lg:table-cell">
        Musique
      </td>
      <td data-cell="color" className="block p-4 lg:table-cell">
        Black
      </td>
      <td data-cell="degree" className="block p-4 lg:table-cell">
        Bachelor
      </td>
      <td data-cell="profession" className="block p-4 lg:table-cell">
        Sofware dev
      </td>
    </tr>
  );
}
