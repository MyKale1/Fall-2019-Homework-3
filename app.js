const org1_depts = [
  {
    name: 'accounting',
    children: [
      { name: 'accounting payable', children: [] },
      { name: 'accounting receivable', children: [] },
    ],
  },
  {
    name: 'finance',
    children: [],
  },
]

const org2_depts = [
  {
    name: 'accounting',
    children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]


  const users = [
    {
      name: 'alice',
      age: 17,
    },
    {
      name: 'bob',
      age: 20,
    },
  ]
  
  const start_tag = '<ol>'
  const end_tag = '</ol>'
  const start_li = '<li>'
  const end_li = '</li>'
  
  var output = start_tag
  for (const user of users) {
    output += start_li + user.name + end_li
  }
  output += end_tag
  
  const outputDiv = document.getElementById('output')
  outputDiv.innerHTML = output

  
  