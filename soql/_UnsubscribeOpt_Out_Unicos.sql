SELECT COUNT(u.SubscriberID) as Opt_Out_Unicos,
       u.JobID
FROM SendsMCReport r
JOIN _Unsubscribe u ON r.JobID = u.JobID
WHERE u.EventDate = DATEADD(DAY, -2, GETDATE()) 
GROUP BY u.JobID