SELECT     
    JobID, 
    AccountUserID as UserID, 
    FromName as Remetente,
    EmailName as Nome_do_Email,
    EmailSubject as Assunto_do_Email,
    DeliveredTime as Hora_de_Envio
FROM _Job
WHERE DeliveredTime = DATEADD(DAY, -2, GETDATE())