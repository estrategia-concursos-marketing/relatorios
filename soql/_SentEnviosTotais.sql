SELECT COUNT(s.SubscriberID) as Envios_Totais,
       s.JobID
FROM SendsMCReport r
JOIN _Sent s ON r.JobID = s.JobID
WHERE s.EventDate = DATEADD(DAY, -2, GETDATE()) 
GROUP BY s.JobID