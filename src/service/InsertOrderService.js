const axios = require('axios');
const jsontoxml = require('jsontoxml');

 blingApiToken = process.env.BLING_API_TOKEN;
 bling_url = require('../url/bling');
  
    module.exports = {
      async create(deals) {
        
        const orders = deals.map(async (deal) => {
          const xml = jsontoxml({
            pedido: [
              {
                name: 'cliente',
                children: [
                  { name: 'nome', text: deal.person_id.name ? deal.person_id.name : 'Teste' },
                  { name: 'tipoPessoa', text: 'J' },
                  { name: 'endereco', text: 'Av. Sao joao' },
                  { name: 'ie_rg', text: '1234567890' },
                  { name: 'numero', text: '5' },
                  { name: 'bairro', text: 'Bela Vista' },
                  { name: 'cep', text: '18059057' },
                  { name: 'cidade', text: 'Sao Paulo' },
                  { name: 'uf', text: 'SP' },
                  { name: 'fone', text: '123456789' },
                  { name: 'email', text: deal.creator_user_id.email || 'teste@gmail.com' },
                ],
              },            
              {
                name: 'itens',
                children: [
                  { name: 'item',
                  children: [
                    { name: 'codigo', text: 1 },
                    { name: 'descricao', text: 'Won deal' },
                    { name: 'un', text: 'Un' },
                    { name: 'qtde', text: 1 },
                    { name: 'vlr_unit', text: deal.value || 0 },
                  ]}
                ],
              },
              {
                name: 'parcelas',
                children: [{
                  name: 'parcela',
                  children: [{ 
                    name: 'vlr', text: deal.value || 0
                  }],
                }],
              }
            ]
          }, false);

      
            const orderData = await axios.post(`${bling_url}pedido/json/?apikey=${blingApiToken}&xml=${xml}`);
            if(orderData.data.retorno.erros) {
             return 
            }
            const { pedido } = orderData.data.retorno.pedidos[0];  
            pedido.Preço = deal.value;
            pedido.cliente = deal.person_id.name;
            pedido.org_name = deal.org_id.name;
            return pedido;
         
        });
    
        const CreatedOrders = await Promise.all(orders).then((res) => {
          const response = [res[res.length - 1]];
          return response;
        });
        
        return CreatedOrders;
      },
    };
    

