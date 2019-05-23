<script runat="server">
    Platform.Load("Core","1");

    var SendsMCReportDE = DataExtension.Init("SendsMCReport").Rows.Retrieve();
    for (var i = 0; i < SendsMCReportDE.length; i++) {
        Write(SendsMCReportDE[i].JobID + ",");
        Write(SendsMCReportDE[i].UserID + ",");
        Write(SendsMCReportDE[i].Remetente + ",");
        Write(SendsMCReportDE[i].Nome_do_Email + ",");
        Write(SendsMCReportDE[i].Assunto_do_Email + ",");
        Write(SendsMCReportDE[i].Hora_de_Envio + ",");
        Write(SendsMCReportDE[i].Envios_Totais + ",");
        Write(SendsMCReportDE[i].Taxa_de_Entrega + ",");
        Write(SendsMCReportDE[i].Aberturas_Unicas + ",");
        Write(SendsMCReportDE[i].Taxa_de_Abertura + ",");
        Write(SendsMCReportDE[i].Clicks_Unicos + ",");
        Write(SendsMCReportDE[i].CTOR + ",");
        Write(SendsMCReportDE[i].Reclamacoes_Unicas + ",");
        Write(SendsMCReportDE[i].Opt_Out_Unicos + ",");
        Write(SendsMCReportDE[i].Bounces_Unicos + ",");
        Write(SendsMCReportDE[i].Taxa_de_Opt_Out + "\n");
    }
</script>