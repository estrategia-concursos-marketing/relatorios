function dataCRM_EC () {
    // Começamos por definir cada aba da planilha e seu respectivo relatório da ferramenta.
    const sheetSendsMC = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Envios do Salesforce");
    const sheetGA = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Google Analytics (Campanha)");
    const sheetAllSubscribers = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tamanho da Base");
    
    // GOOGLE ANALYTICS.
    // Puxamos todos os dados de uma vez pelo GA, tendo em vista que os dados mudam bastante se alguém interagir com um email antigo. Apagando a planilha atual.
    // Começamos por definir a Query da API e depois puxamos os dados.
    var startDate = new Date();
    var endDate = "2019-01-01";
    
    var queryGA = {
      "ids": "ga:49076863",
      "metrics": "ga:sessions,ga:pageviews,ga:uniquePageviews,ga:transactions,ga:transactionsPerSession,ga:transactionRevenue",
      "optionalArgs": {
        "dimensions": "ga:sourceMedium,ga:campaign",
        "filters": "ga:sourceMedium=@salesforce / email",
        "sort": "-ga:transactionRevenue",
        "max-results": "10000",
        "samplingLevel": "HIGHER_PRECISION"
      }    
    }
  
    var reportGA = Analytics.Data.Ga.get(queryGA.ids, startDate, endDate, queryGA.metrics, queryGA.optionalArgs);
    
    // Colocando os dados na planilha. Começamos por definir os objetos.
    var headerGARequest = reportGA.columnHeaders;
    var lastRowGA = sheetGA.getLastRow() + 1;
    var reportGARows = reportGA.getRows();
    var reportGAHeaders = reportGA.columnHeaders.map(function(columnHeader) {
      return columnHeader.name;
    });
    // Imputando os dados no última linha do relatório + Retirando também o header do request. Em caso de erro, verifique a documentação: https://developers.google.com/analytics/devguides/reporting/core/v3/coreErrors
    sheetGA.getRange(lastRowGA, 1, reportGARows.length, 8).setValues(reportGARows);  
    
    
    // MARKETING CLOUD.
    // Os resultados são inputados em uma url dentro do MC. Ele é atualizado automaticamente, sem necessidade de interação humana.
    var dataUrlMC = "http://cloud.mkt.estrategiaconcursos.com.br/b149ae81-4433-4055-806c-fa85b68a0c7c"
    var dataMCContent = UrlFetchApp.fetch(dataUrlMC).getContentText();
    var dataMCSend = Utilities.parseCsv(dataMCContent,';');
  
    // Retorna o valor do CSV no Google Sheets. Retiramos a primeira linha da página, por vir em branco por padrão do MC.
    var headerMCRequest = dataMCSend.columnHeaders;
    var lastRowMC = sheetSendsMC.getLastRow() + 1;
  
    sheetSendsMC.getRange(lastRowMC, 1, dataMCSend.length, dataMCSend[1].length).setValues(dataMCSend);
    
    // Faremos os cálculos das Taxas, colocando a formatação correta da célula também.
    const dataRangeSendsMC = sheetSendsMC.getRange(0, 1, numRows, 21);
    
    const deliveryRateMCRow = dataRangeSendsMC[7];
    const openRateMCRow = dataRangeSendsMC[9];
    const CTOR_MCRow = dataRangeSendsMC[11];
    const complaintRateMCRow = dataRangeSendsMC[13];
    const optOutRateMCRow = dataRangeSendsMC[16];
  }