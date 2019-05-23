SELECT COUNT(o.SubscriberID) as Aberturas_Unicas,
       o.JobID
FROM SendsMCReport r
JOIN _Open o ON r.JobID = o.JobID
WHERE o.EventDate = DATEADD(DAY, -2, GETDATE()) 
AND o.IsUnique = 1
GROUP BY o.JobID