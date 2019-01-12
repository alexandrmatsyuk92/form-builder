class Node {

  getRowsStyle(rows) {
    return {
      'display': 'grid',
      'grid-template-rows': rows.map((r) => r.height || 'auto').join(' ')
    }
  }

  getColumnsStyle(columns) {
    return {
      'display': 'grid',
      'grid-template-columns': new Array(columns.length).fill(`${100 / columns.length}%`).join(' ')
    }
  }
}

class Queue {
  constructor() {
    this._queue = [];
  }

  enqueue(node) {
    this._queue.push(node);
  }

  dequeue() {
    return this._queue.splice(0, 1)[0];
  }
}

class FormController {
  constructor(dragNDropService, $scope) {
    this.grid = {
      rows: [
        {
          columns: [
            {
              content:
                [
                  { title: 'INVOICE RECHNUNG FACTURE FACTURA', type: 'text' }
                ]
            }
          ],
          height: '40px'
        },
        {
          columns: [
            {
              content: [
                {
                  title: 'Seller', type: 'area', value: 'PARKWAY LOGIC LTD.\n' +
                    'Nottingham Road\n' +
                    '\n' +
                    'Belper\n' +
                    'DE56 1JT\n' +
                    'United Kingdom'
                }
              ]
            },
            {
              columns: [
                {
                  content: [
                    { title: 'Invoice number', type: 'input', value: '' },
                    { title: 'Invoice date', type: 'input', value: '' },
                    { title: 'Buyer`s reference', type: 'input', value: '' },
                  ]
                },
                {
                  content: [
                    { title: 'Page 1 of 1', type: 'text', value: '' },
                    { title: 'Seller\'s reference', type: 'input', value: '' },
                    { title: 'Purchase Order date', type: 'input', value: '' },
                  ]
                }
              ]
            }
          ],
          height: '120px'
        },
        {
          columns: [
            {
              content: [
                {
                  title: 'Consignee', type: 'area', value: `UNILEVER TRANS & TRUCKING LLC
                  United StatesAPOTEX INC.
                  Suite 607 Elizabeth Towers, 100 Elizabeth Avenue
                  St. John's
                  NL`
                }
              ]
            },
            {
              content: [
                {
                  title: 'Buyer', type: 'area', value: `APOTEX INC.
                  1010 Rue de la Gauchetière Ouest 
                  Montréal
                  Québec
                  H3B 2N2
                  Canada`
                }
              ]
            },
          ],
          height: '100px'
        },
        {
          columns: [
            {
              content: [
                {
                  type: 'area', value: ``
                }
              ]
            },
            {
              rows: [
                {
                  columns: [
                    {
                      content: [
                        { type: 'input', title: 'Buyer`s bank', value: '' },
                      ]
                    }
                  ]
                },
                {
                  columns: [
                    {
                      content: [
                        { type: 'area', title: 'Origin Country', value: 'United Kingdom' },
                      ]
                    },
                    {
                      content: [
                        { type: 'area', title: 'Destination country', value: 'Canada' },
                      ]
                    }
                  ]
                }
              ]
            },
          ],
          height: '140px'
        },
        {
          columns: [
            {
              columns: [
                {
                  content: [
                    { type: 'area', title: 'Mode of transport', value: 'Full Container Load' },
                    { type: 'input', title: 'Means of transport', value: '' }
                  ]
                },
                {
                  content: [
                    { type: 'input', title: 'Date of despatch', value: '' },
                    { type: 'area', title: 'Place of despatch', value: 'DZ ALG' }
                  ]
                }
              ]
            },
            {
              columns: [
                {
                  rows: [
                    {
                      columns: [
                        {
                          content: [
                            {
                              type: 'area',
                              title: 'Payment & delivery terms',
                              value: 'Incoterms 2010 CPT 30 days from invoice date'
                            },

                          ]
                        },
                        {
                          content: [
                            { type: 'area', title: 'Payment currency', value: 'USD' },
                          ]
                        }
                      ]
                    },
                    {
                      columns: [
                        {
                          content: [
                            { type: 'input', title: 'Seller bank', value: '' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ],
          height: '120px'
        },
        {
          columns: [
            {
              content: [
                { type: 'area', title: 'Shipping marks', value: '' }
              ]
            },
            {
              content: [
                {
                  type: 'area',
                  title: 'No. and kind of packages; description of goods',
                  value: 'Flowers and assorted garden instruments'
                }
              ]
            },
            {
              columns: [
                {
                  content: [
                    { type: 'input', title: 'Total gross wt (kg)', value: '0' },
                    { type: 'input', title: 'Total cube (m3)', value: '0' }
                  ]
                },
                {
                  content: [
                    { type: 'input', title: 'Total net wt (kg)', value: '' },
                    { type: 'text', title: '', value: '' }
                  ]
                }
              ]
            }
          ], height: '100px'
        }, {
          columns: [
            {
              columns: [
                {
                  content: [
                    { type: 'area', title: '#', value: '1' }
                  ]
                },
                {
                  content: [
                    {
                      type: 'area',
                      title: 'Description',
                      value: 'ABBEVILLE\'S PRIDE - box of 300 bulbs size 14/16 - POT ASIATIC Orange-Red'
                    }
                  ]
                },
              ]
            },
            {
              columns: [
                {
                  content: [
                    { type: 'area', title: 'Commodity Code', value: '' }
                  ]
                },
                {
                  content: [
                    { type: 'area', title: 'Quantity', value: '' }
                  ]
                },
                {
                  content: [
                    { type: 'input', title: 'Unit price', value: '557.55' }
                  ]
                },
                {
                  content: [
                    { type: 'input', title: 'Amount', value: '557.55' }
                  ]
                },
              ]
            },
          ],
          height: '100px'
        },
        {
          columns: [
            {
              content: []
            },
            {
              content: []
            },
            {
              content: [
                { type: 'input', title: 'Subtotal', value: '557.55' },
                { type: 'input', title: 'Total charges', value: '--' },
                { type: 'input', title: 'Total deductions', value: '--' }
              ]
            }
          ],
          height: '120px'
        },
        {
          columns: [
            {
              content: [
                { type: 'area', title: 'Clauses and/or sNotes', value: '' }
              ]
            },
            {
              content: [
                { type: 'input', title: 'Total amount', value: '557.55' },
                { type: 'input', title: 'Totals to pay (in words)', value: '' },
                { type: 'input', title: 'Name of signatory', value: '' },
                { type: 'input', title: 'Place and date', value: '' },
                { type: 'input', title: 'Signature', value: '' },
              ]
            }
          ],
          height: '100px'
        }
      ],

    };
    dragNDropService.grid = this.grid;
    dragNDropService.scope = $scope;
  }

  export() {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(this.grid)], { type: 'application/json' });
    a.href = URL.createObjectURL(file);
    a.download = 'form.json';
    a.click();
  }

}

class DService {

  find(node, hash) {
    const queue = new Queue();
    let currentTree = { node };
    let foundNode = null;
    while (currentTree) {
      const array = (currentTree.node.rows || currentTree.node.columns || currentTree.node.content);
      array && array.forEach((node) => queue.enqueue({ node, array }));
      currentTree = currentTree.node.$$hashKey === hash ? (foundNode = currentTree, null) : queue.dequeue();
    }
    Object.assign(foundNode, { ind: foundNode.array.indexOf(foundNode.node) });
    return foundNode;
  }

  set dragEl(el) {
    this.dragElement = el;
  }

  set dropEl(el) {
    this.dropElement = el;
  }

  set grid(grid) {
    this.gridEl = grid;
  }

  set scope(scope) {
    this._scope = scope
  }

  change() {
    const dragEl = this.find(this.gridEl, this.dragElement.key);
    const dropEl = this.find(this.gridEl, this.dropElement.key);
    dropEl.array[dropEl.ind] = dragEl.node;
    dragEl.array[dragEl.ind] = dropEl.node;
    this._scope.$apply(() => this._scope.$ctrl.grid = this.gridEl);
  }
}

function init() {
  const app = angular.module('forms', []);
  app.controller('FormController', FormController);
  app.component('node', {
    templateUrl: './node.html',
    controller: Node,
    bindings: {
      node: '='
    }
  });

  app.directive('dragNDrop', function (dragNDropService) {
    return function (scope, el) {
      el.attr('draggable', true);
      el.on('dragstart', () => dragNDropService.dragEl = { key: scope.$parent.input.$$hashKey });
      el.on('dragover', () => dragNDropService.dropEl = { key: scope.$parent.input.$$hashKey });
      el.on('dragend', () => dragNDropService.change());
    }
  });

  app.directive('fileUploader', function (dragNDropService) {
    return function (scope, el) {
      el.on('change', function (e) {
        const [file] = el[0].files;
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = () => {
          scope.$apply(() => {
            scope.$ctrl.grid = JSON.parse(fileReader.result);
            dragNDropService.grid = scope.$ctrl.grid;
          });
        }
      })
    }
  });

  app.service('dragNDropService', function () {
    return this.instance || (this.instance = new DService(), this.instance);
  });

}
